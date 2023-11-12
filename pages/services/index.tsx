import ServiceCard from '@/src/components/ServiceCard';
import UserLayout from '@/src/layout/UserLayout';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getservicesApi } from '@/src/route';
import Head from 'next/head';
export default function services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
    useEffect(() => {
        axios.get(getservicesApi)
            .then(res => {
                console.log(res);
                setServices(res.data.data.services)
            }
            ).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <UserLayout>
            <Head>
                <title>Our Services - PetPal</title>
            </Head>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/cat-banner.jpg)' }}>
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
                <div className="lg:max-w-[1280px] my-10 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                        Available Pet Services</h1>
                    <div onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
                        Filters
                    </div>
                    <div className="grid md:grid-cols-9 gap-4 my-10 min-h-screen">
                        <div className="col-span-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                {loading ? (
                                    <div className="flex items-center justify-center h-screen">
                                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
                                    </div>
                                ) : (
                                    services && services.length > 0 ? services.map((service, index) => (
                                        <ServiceCard service={service} key={index} />
                                    )) : <p className='col-span-3 text-center text-error'>No Services Available Right Now</p>
                                )}
                            </div>
                        </div>
                        <div className={`lg:col-span-3 duration-300 lg:static fixed top-0 ${isFilterMenuOpen ? "left-0" : "-left-full"} z-50 bg:black/70`}>
                            <div onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)} className="lg:hidden absolute top-6 -right-3 text-white bg-black rounded-full h-7 w-7 flex items-center justify-center">X</div>
                            <div className="bg-gray-200 p-10 rounded-lg">
                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Price Range</h3>
                                    <input type="range" min={0} max="100" value="40" className="range range-accent" />
                                    <div className="flex justify-between text-gray-950">
                                        <span>$0</span>
                                        <span>$100</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Availability</h3>
                                    <label className="flex items-center space-x-2 mt-2">
                                        <input type="checkbox" className="text-cyan-500" />
                                        <span className="text-gray-950">Available Now</span>
                                    </label>
                                    <label className="flex items-center space-x-2 mt-2">
                                        <input type="checkbox" className="" />
                                        <span className="text-gray-950">Next 24 Hours</span>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Pet Type</h3>
                                    <select className="w-full mt-2 bg-white rounded-md p-2">
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="bird">Bird</option>
                                        <option value="rabbit">Rabbit</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Pet Age</h3>
                                    <select className="w-full mt-2 bg-white rounded-md p-2">
                                        <option value="puppy">Puppy</option>
                                        <option value="adult">Adult</option>
                                        <option value="senior">Senior</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Pet Breed</h3>
                                    <input type="text" placeholder="Search by breed" className="w-full mt-2 bg-white  rounded-md p-2" />
                                </div>


                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Location</h3>
                                    <input type="text" placeholder="Enter location" className="w-full mt-2 bg-white  rounded-md p-2" />
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-gray-950 font-semibold ">Service Rating</h3>
                                    <select className="w-full mt-2 bg-white rounded-md p-2">
                                        <option value="5">5 Stars</option>
                                        <option value="4">4 Stars & Up</option>
                                        <option value="3">3 Stars & Up</option>
                                        <option value="2">2 Stars & Up</option>
                                        <option value="1">1 Star & Up</option>
                                    </select>
                                </div>
                                <button className="btn btn-accent rounded-md w-full">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center 0">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Why Choose Us!
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            We understand that your pets deserve the best care. Here's why our pet services stand out:
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm: -mx-2">

                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
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
