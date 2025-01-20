'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Contact() {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const subjectRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const handleContact = (e) => {
        e.preventDefault()

        const templateParams = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            subject: subjectRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        emailjs.send("service_pozgjuc", "template_7yfuiqt", templateParams, "Youw4xtWKzvQsLBA5")
            .then(function (response) {
                toast.success('We have received your mail. Thank you for reaching out.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }, function (error) {
                toast.error(`Mail could not be sent, try again later. ${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });

    }
    return (
        <div className="flex flex-col">
            <ToastContainer />

            <div className="w-full bg-brown py-20 gap-5 flex flex-col justify-center items-center">
                <h2 className="text-white font-semibold text-5xl">
                    Contact Us
                </h2>
                <p className='text-gray-400 w-[85%] mobile:w-1/2 text-center text-sm mobile:text-md'>At Hope Compassion Center, we believe in building strong connections. Whether you have a question, feedback, or need support, our team is here to help. Contact us today and let's start a conversation that matters.</p>

                <div className="flex flex-col pt-10">
                    <div className="flex flex-row bg-amber-800 gap-2 border-gray-300 border- px-5 py-1 rounded-lg">
                        <Link href='/' className='text-gray-300'>Home</Link>
                        <p className='text-gray-900'>{'>  Contact Us'}</p>

                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-cream py-10 mobile:py-20">
                <form
                    onSubmit={handleContact}
                    className="w-full tablet:w-10/12 desktop:w-1/2 mobile:bg-white mobile:shadow-lg rounded-lg mobile:p-5 ">
                    <div className="w-full gap-5 mobile:gap-10 px-8 mobile:py-10 border-b-2 flex flex-col mobile:flex-row">
                        <div className="w-full mobile:w-1/2 flex flex-col gap-3">
                            <h3 className='font-semibold text-2xl'>Contact Us</h3>
                            <p className="text-md w-11/12 font-light">Doing nothing for others is the undoing of ourselves</p>

                        </div>
                        <div className="flex flex-col w-full mobile:w-1/2">
                            <div className="flex flex-row items-center justify-start gap-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="font-bold w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h5>Nairobi, Kenya</h5>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="font-bold w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <h5>info@hopecompassioncenter.com</h5>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="font-bold w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>

                                <h5>(+254) 712 345 678</h5>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 tablet:gap-5 px-5 mobile:px-10 py-10">
                        <div className="w-full flex gap-5 flex-col mobile:flex-row">
                            <div className="flex flex-col w-full tablet:w-1/2 gap-2">
                                <label htmlFor="name" className='text-lg font-semibold'>Name:</label>
                                <input type="text" ref={firstNameRef} className="w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange mobile:text-sm mobile:leading-6" placeholder='Enter your name' />
                            </div>
                            <div className="flex flex-col w-full tablet:w-1/2 gap-2">
                                <label htmlFor="name" className='text-lg font-semibold'>Last Name:</label>
                                <input type="text" ref={lastNameRef} className="w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange mobile:text-sm mobile:leading-6" placeholder='Enter last name' />
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="email" className='text-lg font-semibold'>Email:</label>
                            <input type="email" ref={emailRef} className="w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange mobile:text-sm mobile:leading-6" placeholder='Enter your email' />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="subject" className='text-lg font-semibold'>Subject:</label>
                            <input type="text" ref={subjectRef} className="w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange mobile:text-sm mobile:leading-6" placeholder='Enter your subject' />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="message" className='text-lg font-semibold'>Message:</label>
                            <textarea name="" ref={messageRef} className='w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange mobile:text-sm mobile:leading-6' id="" cols="30" rows="5"></textarea>
                            <small className="text-sm">By sending this message you agree to our <b className='text-blue-600 font-light'>terms & conditions</b></small>
                        </div>
                        <button className="rounded bg-orange text-brown w-fit px-10 py-2" type='submit'> Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact