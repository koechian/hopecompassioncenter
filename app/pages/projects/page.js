import { ProjectCard } from "@/app/components/Cards/cards";
import { projects } from "./data";
import Link from "next/link";

export default function Page() {
  return <div className="w-full  bg-brown flex items-center flex-col">
    <div className="flex flex-col desktop:flex-row w-10/12 pt-16 desktop:py-20">
      <div className="w-full mobile:w-1/2 flex flex-col gap-5 desktop:gap-20">
        <h2 className="text-white text-4xl desktop:text-5xl font-semibold">WE ARE ON A CAUSE TO SPREAD PEACE, LOVE & HARMONY</h2>

        <button className="bg-orange flex gap-2 rounded-full text-cream outline-none w-fit px-4 py-1.5">Make Donation
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
      <div className="w-full desktop:w-1/2 py-10 desktop:py-0 flex justify-end">
        <p className="text-justify font-extralight text-cream text-sm desktop:text-lg w-full desktop:w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
    </div>
    <div className="featured w-full flex justify-center items-center desktop:py-10">
      <div className="w-10/12 desktop:w-1/2 rounded-md bg-cream flex flex-col tablet:flex-row desktop:flex-row items-center p-3">
        <img src="/women.jpg" className="h-[30vh] desktop:h-[40vh] tablet:h-[25vh] rounded-md w-full tablet:w-1/2 desktop:w-1/2 object-cover" alt="" />
        <div className="w-full desktop:w-1/2 flex flex-col gap-2 desktop:gap-7 p-4">
          <span className="flex flex-row items-center gap-2"><h3 className="text-orange font-bold font-josefin text-sm desktop:text-md">DONATIONS :</h3> <h3 className="font-josefin text-sm desktop:text-md"><b>KES 50,000</b> / KES 150,000</h3></span>

          <h3 className="text-brown text-2xl desktop:text-3xl font-bold w-full desktop:w-11/12">
            COVID-19 Rescue Mission in Thindigua.
          </h3>
          <p className="font-light text-sm desktop:text-md">
            Et sit debitis eos qui consectetur officiis perferendis perspiciatis. Voluptatibus et quas. Impedit deleniti eos. Ipsam cum repudiandae. Molestias ratione vol
          </p>
          <Link href={'/pages/donate'}>
            <button className="btn text-gray-700 bg-gray-300 hover:bg-slate-300 ps-4 pe-1 py-1 flex flex-row gap-2 rounded-full justify-center items-center w-fit">DONATE NOW
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </Link>

        </div>
      </div>

    </div>

    <div className="flex flex-col w-full desktop:w-1/2 justify-center items-center py-10">
      <h2 className="text-white text-4xl font-semibold w-3/4 text-center">We've assisted upwards of 100 at-risk communities.</h2>
      <p className="text-cream text-center font-thin pt-3">We have helped 200+ people and communities survive tough times</p>
    </div>
    <div class="w-10/12 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 grid-flow-row gap-4">
      {
        projects.map((project) => (<ProjectCard banner_img={project.banner_img} />))
      }
    </div>
  </div>
}
