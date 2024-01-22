'use client'
import React, { useState } from "react";
import { SectionOne, SectionTwo, SectionThree, SectionFour } from "./sections";

function About() {
  const [selected, setSelected] = useState(0)

  const core_values = ['Compassion', 'Excellence', 'Teamwork', 'Impact Oriented', 'Stewardship', 'Integrity']
  const buttons = ['Our Genesis', 'More Help Arrives', 'Growth of Initiative', 'The Future']
  const sections = [<SectionOne />, <SectionTwo />, <SectionThree />, <SectionFour />]

  return (
    <div className="bg-brown relative flex flex-col justify-center items-center">
      <section className="w-full bg-cream py-10 desktop:py-20 gap-10 flex flex-col justify-center items-center">
        <h2 className="text-brown font-semibold text-5xl desktop:text-6xl">
          About Us
        </h2>
        <p className='text-brown opacity-75 desktop:pb-20 w-[85%] mobile:w-1/2 text-center text-sm mobile:text-md'>From feeding over 200 children in Mathare to providing safe spaces for young minds, empowering the youth through skill development, and supporting elderly women in Migori, our impact resonates through transformative actions that span across generations.</p>
      </section>
      <img src="/hcc_banner.png" className="w-full tablet:w-3/4 tablet:-translate-y-20  opacity-1" alt="" />
      <section className="flex flex-col px-4 tablet:w-11/12 desktop:w-3/4 py-10">

        <div className="flex flex-col tablet:flex-row w-full gap-4 justify-between">

          <div className="flex flex-col justify-start desktop:justify-between gap-5 w-full tablet:w-5/12">
            <h2 className="text-cream font-semibold text-3xl tablet:text-5xl desktop:text-6xl">
              Our Mission & Vision
            </h2>
            <div className="flex flex-col w-full">
              <h4 className="text-orange text-xl desktop:text-2xl">
                OUR VISION
              </h4>
              <p className="text-cream text-sm font-light desktop:font-normal tablet:text-base">To realize an inspired, empowered and transformed community.</p>
            </div>
            <div className="flex flex-col w-full">
              <h4 className="text-orange text-xl desktop:text-2xl">
                OUR MISSION
              </h4>
              <p className="text-cream text-sm font-light desktop:font-normal tablet:text-base">To reach out to vulnerable  children, the elderly, women and the youth through education, mentorship, empowerment initiatives and outreach programs to realize a better community</p>
            </div>

          </div>

          <div className="flex flex-col bg-cream shadow-md rounded h-fit py-5 gap-3 px-4 tablet:px-10 w-full tablet:w-1/2">
            <h3 className="text-xl tablet:text-3xl font-semibold text-brown">"Our mission is to eradicate all and any traces of sadness in the universe"</h3>
            <p className="text-sm tablet:text-base">At Hope Center, we work diligently and sincerely to improve our community by working together to help those who are in need. We aspire to inspire more people to join us in this movement. Our teams have cultivated a culture that entails:</p>
            <div className="grid grid-cols-2 gap-3">
              {
                core_values.map((value) => (
                  <div className="flex flex-row gap-2">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_193_113)">
                        <path d="M24.6094 12.5C24.6094 19.1878 19.1878 24.6094 12.5 24.6094C5.81216 24.6094 0.390625 19.1878 0.390625 12.5C0.390625 5.81216 5.81216 0.390625 12.5 0.390625C19.1878 0.390625 24.6094 5.81216 24.6094 12.5ZM11.0993 18.9118L20.0837 9.92744C20.3888 9.62236 20.3888 9.12769 20.0837 8.82261L18.9789 7.71777C18.6738 7.41265 18.1791 7.41265 17.874 7.71777L10.5469 15.0448L7.12603 11.624C6.82095 11.3189 6.32627 11.3189 6.02114 11.624L4.91631 12.7288C4.61123 13.0339 4.61123 13.5286 4.91631 13.8336L9.99443 18.9118C10.2996 19.2169 10.7942 19.2169 11.0993 18.9118Z" fill="#FF6803" />
                      </g>
                      <defs>
                        <clipPath id="clip0_193_113">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {value.toString()}
                  </div>
                ))
              }
            </div>

            <div className="flex flex-row justify-between items-baseline">
              <div className="flex flex-row gap-3">
                <img src="/kevin.jpg" className="object-top rounded-full h-[6vh] w-[6vh] bg-slate-400 object-cover" alt="" />
                <div className="flex flex-col">
                  <h3>Founder</h3>
                  <a target="_blank" href="https://www.facebook.com/kevin.otieno.33" className="hover:underline"><h3>Kelvin Otieno</h3></a>
                </div>
              </div>
              <img src="/sign.png" className="w-1/4 object-cover" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full px-4 tablet:w-11/12 desktop:w-3/4 pt-0 desktop:pt-20">
        <div className="flex flex-col tablet:flex-row justify-between py-10 tablet:py-20">
          <h2 className="text-cream font-semibold w-full tablet:w-5/12 tablet:text-5xl text-3xl desktop:text-6xl">
            Our Story, <br className="hidden tablet:block" /> so far ...
          </h2>

          <div className="w-full py-5 tablet:py-0 tablet:w-5/12">
            <p className="font-light text-cream text-md ">From feeding over 200 children in Mathare to providing safe spaces for young minds, empowering the youth through skill development, and supporting elderly women in Migori, our impact resonates through transformative actions that span across generations.</p>
          </div>

        </div>

        <div className="flex flex-row relative justify-between">
          <span className="w-full bg-orange absolute h-[1px] top-[50%] z-[1]"></span>
          {
            buttons.map((btn, index) => (
              <button
                onClick={() => { setSelected(index) }}
                className={`ring-1 ring-orange ${selected >= index ? 'bg-orange text-cream ' : 'bg-brown text-orange'} z-[2] w-2/12 hover:bg-orange_light hover:text-gray-300 hover:scale-105 transition-all ease-in-expo rounded-full tablet:rounded-full py-2 uppercase `}>
                <p className="hidden tablet:block">{btn.toString()}</p>
                <p className="block tablet:hidden">{index + 1}</p>
              </button>
            ))
          }


        </div>
        <p className="w-full text-center text-gray-400 uppercase py-5 text-xl tablet:hidden">{buttons[selected]}</p>
        {
          sections[selected]
        }
      </section>

      <div className="w-full bg-cream flex justify-center items-center">
        <div className="w-3/4">

        </div>
      </div>
    </div>
  );
}

export default About;
