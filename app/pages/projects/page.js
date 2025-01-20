'use client'
import { ProjectCard } from "@/app/components/Cards/cards";
import { HomeContentsData, actualProjects, projects } from "./data";
import Link from "next/link";
import { useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbPlayFootball } from "react-icons/tb";
import { GiBabyfootPlayers } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";
import { MdElderlyWoman } from "react-icons/md";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";



const CtgCard = ({ title, selected, setFunction, index, Icon }) => {
  return (
    <div
      onMouseOver={() => setFunction(index)}
      onClick={() => setFunction(index)}
      className="w-full py-7 border-b-2 border-brown flex flex-col tablet:justify-start justify-between gap-5 items-center">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-row justify-center items-center gap-3">
          {
            selected ? <svg width="97" height="41" viewBox="0 0 97 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 hidden desktop:flex">
              <path d="M0 20.5999H96.5001M96.5001 20.5999C88.2223 19.9323 71.6001 15.0776 71.3334 1M96.5001 20.5999C88.1112 21.2675 71.3334 26.1794 71.3334 40.4859" stroke="#251600" strokeWidth="4" />
            </svg> : null
          }

          <div className="rounded-full w-10 h-10 bg-white justify-center items-center flex object-contain p-2">
            <Icon />

          </div>
          <h3 className="text-brown text-mg tablet:text-2xl font-medium">{title}</h3>
        </div>

        {selected ? <TfiAngleUp className="flex desktop:hidden w-5 h-5 object-cover" /> : <TfiAngleDown className="flex desktop:hidden w-5 h-5 object-cover" />}
      </div>
      {selected && <div className="flex flex-col desktop:hidden">
        <hr className="py-3"/>
        <p className="text-xs tablet:text-sm font-light">{actualProjects[index].project_description}</p>
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-2 tablet:gap-5 pt-5">
        {
          actualProjects[index].project_images.map((img) => {
            console.log(img.src)
            return (
              <div>
                <img class="w-full object-cover h-32 tablet:h-44 rounded-lg" src={img.src} alt="" />
              </div>
            )
          })
        }
        </div>

      </div>}
    </div>
  )
}

const icons = [IoIosSchool, MdElderlyWoman, GiTakeMyMoney, TbPlayFootball]

const ContentCard = ({ content, images, title }) => {
  return (
    <div className="w-full flex flex-col gap-10 p-5">
      <h3 className="text-brown text-4xl font-medium ps-5">{title}</h3>
      <p className="w-full text-xl font-light ps-5 ">
        {content}
      </p>
      <div class="grid grid-cols-3 md:grid-cols-3 gap-3 px-4">
        {
          images.map((img) => {
            console.log(img.src)
            return (
              <div>
                <img class="w-full object-cover h-52 rounded-lg" src={img.src} alt="" />
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
      <p className='text-gray-400 w-[85%] desktop:w-1/2 text-center tablet:text-sm text-xs'>
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
      <hr className="w-10/12 bg-brown h-[1.5px]" />
      <div className="flex flex-row w-10/12 justify-between">
        <div className="w-full desktop:w-4/12 flex flex-col">
          {
            actualProjects.map((project, index) => (
              <CtgCard title={project.project_name} selected={index == selected} index={index} setFunction={toggleSelected} Icon={icons[index]} />
            ))
          }
        </div>
        <div className="w-8/12 desktop:flex hidden">
          <ContentCard
            content={actualProjects[selected].project_description}
            images={actualProjects[selected].project_images}
            title={actualProjects[selected].project_name}
          />
        </div>

      </div>

    </div>




  </div>
}
