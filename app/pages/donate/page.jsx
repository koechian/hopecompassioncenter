import Link from 'next/link'
import React from 'react'

function Donate() {
    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col tablet:flex-col desktop:flex-row justify-center items-center">
                <div className="w-full desktop:w-1/2 tablet:w-full  bg-cream desktop:h-[70vh] tablet:h-fit desktop:gap-0 tablet:gap-10 gap-10 flex flex-col justify-between items-center py-10">
                    <img src="/graphic.png" className='w-36' alt="" />
                    <div className="flex flex-col desktop:text-start text-center tablet:text-center items-center desktop:items-start  tablet:items-center w-10/12 gap-5">
                        <h1 className='text-orange text-3xl desktop:text-6xl font-bold w-100'>Support Recent Causes. Make a Difference!</h1>
                        <Link href={'/pages/projects'}>
                            <button className='rounded-full flex flex-row gap-2 items-center justify-center py-1 px-3 text-md desktop:text-lg bg-brown text-cream'>
                                Our Causes
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6 -rotate-45">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col text-center text-sm desktop:text-lg tablet:text-center desktop:text-start w-10/12 gap-3">
                        <p className='font-light'>
                            "Donating to those in need lights a candle of hope in the darkest times; it is not just a gift, but a lifeline that binds the community in unity and compassion."
                        </p>
                        <span className="flex flex-row gap-2 desktop:justify-start justify-center tablet:justify-center">
                            <p className='text-orange font-semibold'>Ian Koech</p>
                            <p className='text-orange font-light'>Community Representative</p>

                        </span>

                    </div>
                    <img src="/graphic.png" className='w-36 rotate-180' alt="" />
                </div>
                <div className="w-full desktop:w-1/2 tablet:w-full bg-[#3C2300] desktop:h-[70vh] h-fit tablet:h-fit relative justify-center items-center flex py-10 tablet:justify-center tablet:flex tablet:py-10">
                    <form className="w-11/12 desktop:w-9/12 tablet:w-9/12 bg-white relative p-5 desktop:p-10  top-0 left-0 tablet:top-0 gap-4 flex flex-col tablet:left-0 rounded-md">
                        <div className="flex flex-col gap-3 text-lg">
                            <label htmlFor="name" className='font-semibold text-lg'>Name</label>
                            <input type="text" className='w-100 rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]' placeholder='Full name' />
                        </div>

                        <div className="flex flex-col gap-3 text-lg">
                            <label htmlFor="email" className='font-semibold text-lg'>Email</label>
                            <input type="email" className='w-100 rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]' placeholder='Enter your email' />
                        </div>
                        <div className="flex flex-col gap-3 text-lg">
                            <label htmlFor="phone" className='font-semibold text-lg'>Phone</label>
                            <input type="number" className='w-100 rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]' placeholder='Phone number' />
                        </div>
                        <div className="flex flex-col gap-3 text-lg">
                            <label htmlFor="name" className='font-semibold text-lg'>Donate</label>
                            <input type="number" className='w-100 rounded-md ring-1 py-2 pl-7 pr-20 ring-gray-300 text-sm desktop:text-sm px-3 placeholder:text-[#C9C9C9]' placeholder='Donate' />
                        </div>
                        <p className='font-light text-sm desktop:text-md  text-brown py-3'>
                            We really appreciate your kindness and value your contributions. So we keep detailed records of where your money goes to support everyone in need. Feel free to request these records anytime.
                        </p>
                        <div className="flex flex-col desktop:pt-5 justify-start">
                            <button type='button' className='bg-orange py-3 px-4 w-2/4 rounded-md text-[#25160087] hover:text-cream'>Make Donation</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full flex desktop:h-[30vh] tablet:h-fit  bg-brown justify-center ">
                <div className="flex flex-col w-11/12 desktop:w-10/12 py-7 gap-4">
                    <span className='flex flex-row gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="text-white w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className='text-cream text-xl font-semibold'>1000+ Communities Supported</h3>
                    </span>
                    <span className='flex flex-row gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="text-white w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className='text-cream text-xl font-semibold'>500+ children schooled</h3>
                    </span>
                    <span className='flex flex-row gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="text-white w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className='text-cream text-xl font-semibold'>120+ wells dug</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Donate