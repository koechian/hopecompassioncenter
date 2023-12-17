import react from "react";
import Image from "next/image";
import Header from "./components/Header/header";
import Link from "next/link";
import Footer from "./components/Footer/footer";
export default function Landing() {
  return (
    <div className="bg-cream">
      <Header />
      <section className="flex flex-col">
        <div
          className="w-full"
          style={{
            minHeight: "70px",
            position: "relative",
          }}
        >
          <Image src={"/Banner.png"} layout="fill" objectFit="contain"></Image>
        </div>
        <div
          style={{ minHeight: "70vh" }}
          className="grid grid-cols-2 pt-20 mt-20 px-20"
        >
          <div className="p-2 pt-9">
            <h1 className="text-4xl font-semibold">
              Transforming Lives, One Act of Compassion at a time
            </h1>
            <br />
            <br />
            <p className="text-lg">
              At the heart of Hope Compassion Center lies a journey sparked by
              one individual's compassion and fueled by a collective commitment
              to uplift lives. Join us in building a future where hope prevails,
              dreams flourish, and communities thrive. Together, we make a
              lasting difference, one step at a time.
            </p>
            <button className=" bg-orange rounded-md p-5 text-white text-lg my-8">
              More About us →
            </button>
          </div>
          <Image
            src={"/sun.svg"}
            style={{ position: "absolute", left: "50px", top: "13%" }}
            width={200}
            height={100}
          ></Image>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              backgroundImage: "url(/hero.jpg)",
              backgroundSize: "cover",
              border: "solid 12px #251600a1",
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <Image
          src={"/butterflies.png"}
          style={{ position: "absolute", left: "30%", bottom: "5%" }}
          width={200}
          height={100}
        ></Image>
      </section>
      <section className="bg-brown text-cream flex flex-col p-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center w-1/2 text-2xl font-bold">
            Take a look at some of our
            <br />
            ongoing and completed Projects
          </h1>
          <br />
          <br />
          <p className="text-center w-1/2">
            From feeding over 200 children in Mathare to providing safe spaces
            for young minds, empowering the youth through skill development, and
            supporting elderly women in Migori, our impact resonates through
            transformative actions that span across generations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 place-items-center">
          <div
            style={{ aspectRatio: "5/3" }}
            className="p-5 bg-cream grid max-w-xl rounded-md grid-cols-2 gap-1 text-sm"
          >
            <div
              className=" bg-cover bg-center rounded-md m-1"
              style={{ backgroundImage: "url(/eating.jpg)" }}
            ></div>
            <div className="text-md text-brown">
              <h2 className="font-semibold text-center text-lg">
                Children Feeding and <br /> Daycare Program
              </h2>
              <br />
              <p>
                In 2020, the Kids Hub emerged as a haven for children aged 9
                months to 3 years. This safe space includes a daycare and
                Montessori education program, offering a secure environment for
                learning and growth.
                <br />
                <br />
                At the heart of our mission is the Children's Feeding Program,
                launched in 2017. We provide daily nourishment to over 200
                children in Mathare, combating hunger and promoting a healthy
                start for these young minds.
              </p>
            </div>
          </div>
          <div
            style={{ aspectRatio: "5/3" }}
            className="p-3 bg-cream grid max-w-xl rounded-md grid-cols-2 gap-1"
          >
            <div
              className=" bg-cover bg-center rounded-md m-1"
              style={{ backgroundImage: "url(/migori.jpg)" }}
            ></div>
            <div className="text-md text-brown">
              <h2 className="font-semibold text-center text-lg">
                The Elderly and Widows in Migori
              </h2>
              <br />
              <p>
                Focused on the well-being of elderly women in Migori, our
                initiatives provide support through farming projects and
                financial assistance. We aim to bring hope and dignity to those
                who have faced hunger, oppression, and despair.
              </p>
            </div>
          </div>{" "}
          <div
            style={{ aspectRatio: "5/3" }}
            className="p-3 bg-cream grid max-w-xl rounded-md grid-cols-2 gap-1"
          >
            <div
              className="bg-cover bg-center rounded-md m-1"
              style={{ backgroundImage: "url(/women.jpg)" }}
            ></div>
            <div class="text-md text-brown">
              <h2 className="font-semibold text-center text-lg">
                Woman Empowerment <br /> in Mathare
              </h2>
              <p>
                In Mathare, we empower a group of over 25 women through
                financial literacy training and skills development. From liquid
                soap making to candle and jelly making, these programs equip
                women with the tools to enhance their livelihoods.
              </p>
            </div>
          </div>{" "}
          <div
            style={{ aspectRatio: "5/3" }}
            className="p-3 bg-cream grid max-w-xl rounded-md grid-cols-2 gap-1"
          >
            <div
              className="bg-cover bg-center rounded-md m-1"
              style={{ backgroundImage: "url(/youth-team.jpg)" }}
            ></div>
            <div className="text-md text-brown">
              <h2 className="font-semibold text-center text-lg">The Youth</h2>
              <p>
                Addressing the challenges faced by urban youths, our weekly
                Youth Empowerment Initiative brings together 25 individuals.
                Through skills training, financial literacy, and mindset shift
                programs, we empower them to overcome obstacles and pursue a
                brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0">
        <div className="flex flex-col items-center py-10">
          <h1 className="text-orange font-bold text-4xl">
            Building Hope, Nurturing dreams and empowering communities together.
          </h1>
          <br />
          <p>
            {" "}
            Our story begins in 2020 in the Mathare Slums of Nairobi Kenya.
          </p>
          <Link className="hover:text-orange" href={"/about"}>
            {" "}
            Learn more...
          </Link>
          <div
            className=""
            style={{
              position: "absolute",
              right: "4%",
              height: "190px",
              width: "190px",
              background: "url(holdinghands.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center bg-zinc-50 p-10">
          <h1 className="text-center text-orange text-4xl font-bold tracking-widest p-5">
            Meet our founder
          </h1>
          <iframe
            className="rounded-md mb-2"
            width="1200"
            height="600"
            src="https://www.youtube.com/embed/vBDMQhZv8UI?si=UlSgDKIzl9XnRXK4&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}
