import ServiceCard from '@/src/components/ServiceCard';
import UserLayout from '@/src/layout/UserLayout';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getservicesApi } from '@/src/route';
export default function services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(getservicesApi).then(res => {
            console.log(res);
            setServices(res.data.data.services||[])
        }
        ).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <UserLayout>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Our Pet Services</h1>
                        <p className="mb-5">We are dedicated to providing the best care for your beloved pets. Our team is committed to ensuring the well-being and happiness of your furry friends. Trust us with their needs, and let them experience the love and care they deserve.</p>
                        <button className="btn btn-accent">Explore Services</button>

                    </div>
                </div>
            </div>
            <section className="p-8">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold text-center my-10 ">Available Pet Services</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {loading ? (
                            <div className="flex items-center justify-center h-screen">
                                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
                            </div>
                        ) : (
                            services.length > 0 ? services.map((service, index) => (
                                <ServiceCard service={service} key={index} />
                            )) : <p className='col-span-3 text-center text-error'>No Services Available Right Now</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Why Choose Us!
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            We understand that your pets deserve the best care. Here's why our pet services stand out:
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {/* Add your service items here */}
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Tailored Care Plans</span>
                            </div>

                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Tailored Care Plans</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>

    )
}
