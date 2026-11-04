"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LuCircleAlert, LuCircleCheck, LuLoaderCircle } from "react-icons/lu";
import { sendEnquiry } from "@/lib/send_enquiry";

const inputClass =
  "w-full rounded-lg border border-charcoal/20 px-4 py-3 text-base text-charcoal placeholder:text-charcoal/45 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

function Field({ id, label, optional, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-charcoal">
        {label}
        {optional && <span className="ml-1 font-normal text-charcoal/60">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

// Follows ?type=... so links such as the Partner With Us cards can preselect an enquiry type.
// Kept in its own component because useSearchParams must sit inside Suspense in a static export.
function CategoryFromAddress({ categories, onCategory }) {
  const requested = useSearchParams().get("type");
  useEffect(() => {
    if (categories.includes(requested)) onCategory(requested);
  }, [requested, categories, onCategory]);
  return null;
}

/**
 * Enquiry form for the Contact and Partner With Us pages.
 * `variant` "contact" adds organisation and subject fields; "partnership" uses the enquiry type as the subject.
 */
export default function EnquiryForm({ variant, categories, categoryLabel, nameLabel }) {
  const idPrefix = `${variant}-enquiry`;
  const [category, setCategory] = useState(categories[0]);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: people never see this field, bots usually fill it in.
    if (data.get("website")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await sendEnquiry({
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        organisation: data.get("organisation"),
        category,
        subject: data.get("subject") || `${category} enquiry`,
        message: data.get("message"),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10">
        <LuCircleCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-forest" />
        <div>
          <p className="font-semibold text-forest">Thank you, your message has been sent.</p>
          <p className="mt-1 text-charcoal/80">We have received your enquiry and will get back to you as soon as we can.</p>
          <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-rust underline">
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10 sm:p-8">
      <Suspense fallback={null}>
        <CategoryFromAddress categories={categories} onCategory={setCategory} />
      </Suspense>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${idPrefix}-name`} label={nameLabel}>
          <input id={`${idPrefix}-name`} name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field id={`${idPrefix}-email`} label="Email Address">
          <input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field id={`${idPrefix}-phone`} label="Phone Number" optional>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        {variant === "contact" ? (
          <Field id={`${idPrefix}-organisation`} label="Organisation" optional>
            <input id={`${idPrefix}-organisation`} name="organisation" type="text" autoComplete="organization" className={inputClass} />
          </Field>
        ) : (
          <Field id={`${idPrefix}-category`} label={categoryLabel}>
            <select id={`${idPrefix}-category`} value={category} onChange={(event) => setCategory(event.target.value)} className={inputClass}>
              {categories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
        )}
      </div>

      {variant === "contact" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={`${idPrefix}-category`} label={categoryLabel}>
            <select id={`${idPrefix}-category`} value={category} onChange={(event) => setCategory(event.target.value)} className={inputClass}>
              {categories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
          <Field id={`${idPrefix}-subject`} label="Subject">
            <input id={`${idPrefix}-subject`} name="subject" type="text" required className={inputClass} />
          </Field>
        </div>
      )}

      <Field id={`${idPrefix}-message`} label="Message">
        <textarea id={`${idPrefix}-message`} name="message" required rows={6} className={inputClass} />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-website`}>Leave this field empty</label>
        <input id={`${idPrefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "failed" && (
        <p role="alert" className="flex items-start gap-2 rounded-lg bg-rust/10 p-3 text-sm text-rust">
          <LuCircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          Your message could not be sent. Please try again, or email us directly.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-forest-deep disabled:opacity-70"
        >
          {status === "sending" && <LuLoaderCircle aria-hidden="true" className="size-4 animate-spin" />}
          {status === "sending" ? "Sending" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
