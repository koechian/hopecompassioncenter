'use client'
import { ProjectCard } from "@/app/components/Cards/cards";
import { HomeContentsData, actualProjects, projects } from "./data";
import Link from "next/link";
import { useState } from "react";


const CtgCard = ({ title, selected, setFunction, index }) => {
  return (
    <div
      onMouseOver={() => setFunction(index)}
      className="w-full py-7 border-b-2 border-brown flex flex-row justify-start gap-5 items-center">
      {
        selected ? <svg width="97" height="41" viewBox="0 0 97 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 ">
          <path d="M0 20.5999H96.5001M96.5001 20.5999C88.2223 19.9323 71.6001 15.0776 71.3334 1M96.5001 20.5999C88.1112 21.2675 71.3334 26.1794 71.3334 40.4859" stroke="#251600" stroke-width="4" />
        </svg> : null
      }

      <div className="rounded-full w-10 h-10 bg-white justify-center items-center flex object-contain p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>

      </div>
      <h3 className="text-brown text-2xl font-medium">{title}</h3>
    </div>
  )
}

const ContentCard = ({ content, images }) => {
  return (
    <div className="w-full flex flex-col gap-10 p-5">
      <p className="w-full text-xl font-light ps-5 ">
        {content}
      </p>
      <div class="grid grid-cols-3 md:grid-cols-3 gap-3 px-4">
        {
          images.map((img) =>{
            console.log(img.src)
            return (
              <div>
                <img class="h-auto max-w-full rounded-lg" src={img.src} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default function Page() {
  function toggleSelected(index) {
    setSelected(index)
  }

  const [selected, setSelected] = useState(0)

  return <div className="w-full  bg-brown flex items-center flex-col">

    <div className="w-full bg-brown py-20 gap-5 flex flex-col justify-center items-center">
      <h2 className="text-white font-semibold text-5xl">
        Our Projects
      </h2>
      <p className='text-gray-400 w-[85%] desktop:w-1/2 text-center text-sm mobile:text-md'>
        At Hope Center, we believe in the power of unity and compassion to bring about lasting change. Every act of kindness, big or small, creates ripples that extend far beyond the initial gesture. By joining hands with us, you become a beacon of hope, illuminating paths and empowering lives. Together, we can uplift our community, one heart at a time. Your support, your time, and your voice are crucial in weaving a tapestry of change. Let's inspire and be inspired, as we forge a brighter, more inclusive future for all.
      </p>

      <div className="flex flex-col pt-10">
        <div className="flex flex-row bg-amber-800 gap-2 border-gray-300 border- px-5 py-1 rounded-lg">
          <Link href='/' className='text-gray-300'>Home</Link>
          <p className='text-gray-900'>{'>  Our Projects'}</p>

        </div>
      </div>
    </div>

    <div className="bg-cream h-fit w-full justify-center items-center flex flex-col py-20">
      <div className="flex flex-col w-full desktop:w-1/2 justify-center items-center py-10">
        <h2 className="text-brown text-4xl font-semibold w-3/4 text-center">We've assisted upwards of 100 at-risk communities.</h2>
        <p className="text-black text-center font-thin pt-3">We have helped 200+ people and communities survive tough times</p>
      </div>
      <hr className="w-3/4 bg-brown h-[1.5px]" />
      <div className="flex flex-row w-3/4 justify-between">
        <div className="w-1/2 flex flex-col">
          {
            actualProjects.map((project, index) => (
              <CtgCard title={project.project_name} selected={index == selected} index={index} setFunction={toggleSelected} />
            ))
          }
        </div>
        <div className="w-1/2">
          <ContentCard content={actualProjects[selected].project_description} images={actualProjects[selected].project_images} />
        </div>

      </div>

    </div>




  </div>
}
