import React from 'react'
import Link from "next/link";


function Contact() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full gap-7 bg-orange-950 h-96 flex flex-col justify-center items-center">
        <h3 className="text-5xl text-white font-semibold">Contact Us</h3>
        <p className='text-md font-light text-gray-200'>
          If you have any questions or need assistance, feel free to contact us. We are here for you!
        </p>

        <div className="flex flex-col pt-10">
            <div className="flex flex-row justify-center items-center rounded-lg  border-white p-1 px-4 gap-2 bg-amber-900">
              <Link href='/' className='text-white hover:text-blue-300 font-semibold'>Home</Link> 
              <p className='text-gray-400'>{'>'}</p>
              <h3 className='text-gray-400'>Contact Us</h3>
            </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center bg-gray-200 py-10">
        <form action="#" method="post" className="rounded-lg bg-white shadow-lg overflow-hidden w-1/2 h-96">

        </form>
      </div>
    </div>
  )
}

export default Contact