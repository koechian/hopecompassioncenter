import React from 'react'
import Link from 'next/link'

export const ProjectCard = (props) => {
    return (
        // Add 'flex flex-col justify-between h-full' to make sure the card stretches full height and pushes the button to the bottom
        <div className="w-11/12 hover:scale-105 transition-all ease duration-300 flex flex-col justify-between h-full p-3 gap-1 desktop:gap-3 rounded-md bg-cream">
            <div>
                <span className="bg-[#251600AB] px-2 w-fit rounded-sm text-brown">{Math.trunc((props.given_donations / props.requested_donations) * 100)}%</span>
                <img src={props.banner_img} className='w-full desktop:h-[30vh] tablet:h-[20vh] h-[20vh] object-cover' alt="" />
                <span className="flex flex-row items-center gap-2 desktop:py-4 text-sm desktop:text-md">
                    <h3 className="text-orange font-bold font-josefin ">DONATIONS :</h3>
                    <h3 className="font-josefin"><b>KES {props.given_donations}</b> / KES {props.requested_donations}</h3>
                </span>
                <h3 className="text-brown text-2xl font-semibold w-11/12">
                    {props.project_name}
                </h3>
                <div className="flex text-start">
                <p className='font-light py-3'>{props.project_description}</p>
            </div>
            </div>
            
        </div>
    )
}


export const HomeProjectCard = (props) => {
    return (
        <div className="w-full tablet:w-11/12 flex flex-col desktop:flex-row bg-cream p-2 py-3 gap-4 rounded-md h-full">
            <img src={props.item.content_banner} alt="" className='w-full desktop:w-1/2 h-[inherit] !tablet:h-[20vh] desktop:h-full object-cover rounded-md' />
            <div className="w-full desktop:w-1/2 flex flex-col justify-between tablet:h-full">
                <div className="flex flex-col">
                    <h3 className="text-md tablet:text-2xl font-semibold text-brown">
                        {props.item.content_title}
                    </h3>
                    <p className='text-gray-500 tablet:text-sm text-xs font-light py-3 overflow-hidden'>
                        <span className="line-clamp-5 max-h-[15vh]">
                            {props.item.content_description}
                        </span>
                    </p>
                </div>

                <Link href={'/pages/projects'}>
                    <button className='bg-orange w-fit gap-3 rounded-md mt-3 flex flex-row justify-center px-5 text-cream py-2'>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                </Link>
            </div>
        </div>
    )
}

