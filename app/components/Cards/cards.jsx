import React from 'react'
import Link from 'next/link'

export const ProjectCard = (props) => {
    return (
        <div className="w-11/12 flex flex-col justify-start p-3 gap-1 desktop:gap-3 rounded-md bg-cream">
            <span className="bg-[#251600AB] px-2 w-fit rounded-sm text-brown">90%</span>
            <img src={props.banner_img} className='w-full' alt="" />
            <span className="flex flex-row items-center gap-2 text-sm desktop:text-md"><h3 className="text-orange font-bold font-josefin">DONATIONS :</h3> <h3 className="font-josefin"><b>KES 50,000</b> / KES 150,000</h3></span>
            <h3 className="text-brown text-2xl font-semibold w-11/12">
                COVID-19 Rescue Mission in Thindigua.
            </h3>

            <Link href={'/pages/donate'}>
                <button className="btn text-gray-700 bg-gray-300 hover:bg-slate-300 ps-4 pe-1 py-1 flex flex-row gap-2 rounded-md justify-center items-center w-fit">DONATE NOW
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
            </Link>

        </div>
    )
}

