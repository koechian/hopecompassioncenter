"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const MpesaModule = ({ onClose }) => {
  return (
    <div className="w-full bg-blur absolute top-[0%] right-[0%] z-[99] h-full flex flex-col justify-center items-center">
      <div className="tablet:w-3/4 w-11/12 desktop:w-1/2 gap-3 flex flex-col bg-cream shadow-lg rounded-lg p-4 h-fit">
        <div className="flex flex-row justify-between">
          <h3 className="text-gray-700 text-2xl font-semibold">
            CO-OPERATIVE BANK
          </h3>

          <button
            onClick={onClose}
            className="shadow-lg hover:bg-red-400  bg-red-600 text-white p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr />
        <div className="flex flex-row justify-start items-center gap-3 w-full">
          <span className="font-semibold w-1/3">
            Account Name:
          </span>
          <span className="rounded-lg bg-green-400 px-3 py-1 font-light w-2/3">
            HOPE COMPASSION CBO
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-3 w-full">
          <span className="font-semibold w-1/3">
            Account Type:
          </span>
          <span className="rounded-lg bg-green-400 px-3 py-1 font-light w-2/3">
            USD CURRENT
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-3 w-full">
          <span className="font-semibold w-1/3">
            Account No.:
          </span>
          <span className="rounded-lg flex flex-row justify-between bg-green-400 px-3 leading-4 py-2 font-light w-2/3">
            02120245390000
          </span>
        </div>
      </div>
    </div>
  );
};

function Donate() {
  const [openPayments, setOpenPayments] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const mpesaRef = useRef();

  const handleDonate = (e) => {
    e.preventDefault();

    // console.log(process.env.NEXT_SERVICE_ID)

    var templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      mpesaCode: mpesaRef.current.value,
    };

    emailjs
      .send(
        "service_pozgjuc",
        "template_ak7llxh",
        templateParams,
        "Youw4xtWKzvQsLBA5"
      )
      .then(
        function (response) {
          toast.success(
            "We have received your donation mail.We appreciate your donation.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        },
        function (error) {
          toast.error(`Mail could not be sent, try again later. ${error}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="flex flex-col bg-cream">
      <ToastContainer />
      <div className="w-full flex flex-col h-fit tablet:flex-col desktop:flex-row justify-center items-center">
        <div className="w-full desktop:w-1/2 tablet:w-full  bg-cream desktop:gap-20 tablet:h-fit tablet:gap-10 gap-10 flex flex-col justify-between items-center py-10">
          <img src="/graphic.png" className="w-36" alt="" />
          <div className="flex flex-col desktop:text-start text-center tablet:text-center items-center desktop:items-start  tablet:items-center w-10/12 gap-5">
            <h1 className="text-orange text-3xl desktop:text-6xl font-bold">
              Support Recent Causes. Make a Difference!
            </h1>
            <Link href={"/pages/projects"}>
              <button className="rounded-full flex flex-row gap-2 items-center justify-center py-1 px-3 text-md desktop:text-lg bg-brown text-cream">
                Our Causes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  className="w-6 h-6 -rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <div className="flex flex-col text-center text-sm desktop:text-lg tablet:text-center desktop:text-start w-10/12 gap-3">
            <p className="font-light">
              <strong className="text-xl">"Hands Wash Each Other."</strong>{" "}
              <br />
              <br /> This proverb speaks to how the systems of life work. From
              the isiZulu saying, “Izandla ziyagezana” meaning “hands wash each
              other”, we know that we are here, on this planet, to help each
              other, and build each other up."
            </p>
            <span className="flex flex-row gap-2 desktop:justify-start justify-center tablet:justify-center">
              <p className="text-orange font-light">Zulu Saying</p>
            </span>
          </div>
          <img src="/graphic.png" className="w-36 rotate-180" alt="" />
        </div>
        <div className="w-full desktop:w-1/2 desktop:py-10 tablet:w-full bg-[#3C2300] desktop:h-fit h-fit tablet:h-fit relative justify-center items-center flex py-10 tablet:justify-center tablet:flex tablet:py-10">
          {openPayments ? (
            <MpesaModule onClose={() => setOpenPayments(false)} />
          ) : null}
          <form
            onSubmit={handleDonate}
            className="w-11/12 desktop:w-9/12 tablet:w-9/12 bg-white relative p-5 desktop:p-10  top-0 left-0 tablet:top-0 gap-4 flex flex-col tablet:left-0 rounded-md"
          >
            <div className="flex flex-col gap-3 text-lg">
              <label htmlFor="donor-name" className="font-semibold text-lg">
                Name
              </label>
              <input
                id="donor-name"
                type="text"
                required
                autoComplete="name"
                ref={nameRef}
                className="rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]"
                placeholder="Full name"
              />
            </div>

            <div className="flex flex-col gap-3 text-lg">
              <label htmlFor="donor-email" className="font-semibold text-lg">
                Email
              </label>
              <input
                id="donor-email"
                type="email"
                required
                autoComplete="email"
                ref={emailRef}
                className="rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <label htmlFor="donor-phone" className="font-semibold text-lg">
                Phone
              </label>
              <input
                id="donor-phone"
                type="tel"
                required
                autoComplete="tel"
                ref={phoneRef}
                className="rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]"
                placeholder="Phone number"
              />
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <label htmlFor="donor-mpesa-code" className="font-semibold text-lg">
                Donate
              </label>
              <div className="flex flex-row gap-3">
                <input
                  id="donor-mpesa-code"
                  type="text"
                  required
                  ref={mpesaRef}
                  className="w-8/12 rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]"
                  placeholder="Enter MPESA payment code eg.RQSIFH579"
                />
                <button
                  type="button"
                  onClick={() => {
                    setOpenPayments(!openPayments);
                  }}
                  className="btn text-sm bg-green-400 rounded-sm text-gray-600 px-4 py-3"
                >
                  SHOW BANK DETAILS
                </button>
              </div>
            </div>
            <p className="font-light text-sm desktop:text-md  text-brown py-3">
              We really appreciate your kindness and value your contributions.
              So we keep detailed records of where your money goes to support
              everyone in need. Feel free to request these records anytime.
            </p>
            <div className="flex flex-col desktop:pt-5 justify-start">
              <button
                type="submit"
                className="bg-orange py-3 px-4 w-2/4 rounded-md text-[#25160087] hover:text-cream"
              >
                Make Donation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
