import react from "react";
import Image from "next/image";
import Header from "./components/Header/header";
import Link from "next/link";
import Footer from "./components/Footer/footer";
import { HomeContentsData } from "./pages/projects/data";
import { HomeProjectCard } from "./components/Cards/cards";
export default function Landing() {
  return (
    <div className="bg-cream">
      <section className="flex flex-col relative">
        <div
          className="w-full h-8 bg-cover"
          style={{
            background: `url('Banner.png')`
          }}
        >
        </div>
        <div
          style={{ minHeight: "70vh" }}
          className="w-full flex desktop:flex-row flex-col justify-center relative py-5 tablet:py-20 px-3 tablet:px-5 tablet:gap-5 desktop:px-20"
        >
          <div className="p-2 desktop:pt-9 w-full justify-center items-center flex flex-col desktop:items-start tablet:w-full desktop:w-1/2 z-[3] tablet:flex tablet:flex-col tablet:justify-center tablet:items-center">
            <h1 className="text-4xl text-center tablet:text-3xl tablet:text-center desktop:text-start desktop:text-6xl font-semibold w-full tablet:w-10/12">
              Transforming Lives, One Act of Compassion at a time
            </h1>
            <br />
            <br />
            <p className="text-sm text-center desktop:text-start tablet:text-sm tablet:text-center desktop:text-lg w-full tablet:w-10/12 font-light">
              At the heart of Hope Compassion Center lies a journey sparked by
              one individual's compassion and fueled by a collective commitment
              to uplift lives. Join us in building a future where hope prevails,
              dreams flourish, and communities thrive. Together, we make a
              lasting difference, one step at a time.
            </p>
            <Link href={'/pages/about'}>
              <button className=" bg-orange rounded-md py-2 px-5 gap-3 flex flex-row items-center justify-center text-white text-lg my-8">
                More About us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>
          </div>
          <div
            className="tablet:w-full desktop:w-1/2 tablet:h-[35vh] h-[25vh] desktop:h-[inherit] !border-none ring-4 ring-[#251600a1]"
            style={{
              position: "relative",
              backgroundImage: "url(/hero.jpg)",
              backgroundSize: "cover",
              border: "solid 12px #251600a1",
              borderRadius: "10px",
            }}></div>
          <img src="/sun.svg" className="w-[5vh] tablet:w-[10vh] top-[1%] tablet:top-[0%] left-[2%] absolute " alt="" />
          {/* <img src="/butterflies.png" className="w-[5vh] tablet:w-[10vh] desktop:bottom-0 bottom-0 tablet:top-[0%] left-[2%] absolute " alt="" /> */}

        </div>

      </section>
      <section className="bg-brown text-cream flex flex-col p-5 desktop:p-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center w-full desktop:w-1/2 text-4xl font-semibold">
            Take a look at some of our
            <br />
            ongoing and completed Projects
          </h1>
          <br />
          <br />
          <p className="text-center w-full desktop:w-1/2 desktop:text-md text-sm font-light">
            From feeding over 200 children in Mathare to providing safe spaces
            for young minds, empowering the youth through skill development, and
            supporting elderly women in Migori, our impact resonates through
            transformative actions that span across generations.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-y-10 place-items-center pt-20">
          {
            HomeContentsData.map((item) => (
              <HomeProjectCard
                item={item}
              />
            ))
          }
        </div>
      </section>
      <section className="p-0">
        <div className="flex flex-col items-start tablet:items-center gap-4 px-5 py-10">
          <h1 className="text-orange font-semibold desktop:font-bold text-2xl w-11/12 tablet:text-4xl">
            Building Hope, Nurturing dreams and empowering communities together.
          </h1>

          <p className="w-11/12 m-0 font-light">
            {" "}
            Our story begins in 2020 in the Mathare Slums of Nairobi Kenya.
          </p>
          <Link className="hover:text-orange" href={"/about"}>
            <button className="btn rounded-full bg-brown text-cream flex flex-row px-3 py-1 gap-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </Link>
          <div
            className="hidden desktop:block tablet:!w-28"
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

        <div className="flex flex-col items-center bg-zinc-50 desktop:p-10 p-5">
          <h1 className="text-center text-orange text-4xl font-semibold p-5">
            Meet our founder
          </h1>
          <iframe
            className="rounded-md mb-2 aspect-video w-full tablet:w-3/4"

            src="https://www.youtube.com/embed/vBDMQhZv8UI?si=UlSgDKIzl9XnRXK4&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
