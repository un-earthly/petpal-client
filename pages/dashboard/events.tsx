import DashboardLayout from '@/src/layout/DashboardLayout'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.css";
import { Pagination } from 'swiper/modules';
import Head from 'next/head';
export default function events() {

    return (
        <DashboardLayout>
            <Head>
                <title>Events - PetPal</title>
            </Head>
            <div className='overflow-hidden'>

                <div className="flex h-screen relative overflow-y-scroll">
                    <div className="w-4/5 h-full">
                        <div className="rounded-none card min-h-[600px] bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply w-11/12 shadow-xl bg-[url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-banner-design-template-c4b3a9dd6c6c6aeeb319177e055b1a4c_screen.jpg?ts=1650360642')]">
                            <div className="card-body justify-end mb-20">
                                <h2 className="text-5xl max-w-lg uppercase text-white font-bold">Lorem ipsum dolor sit amet</h2>
                                <p className='flex-grow-0 text-5xl font-bold uppercase text-outline'>If a 2023?</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-wide mt-5 btn-accent bg-teal-400">Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-none card min-h-[600px] bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply w-11/12 shadow-xl bg-[url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-banner-design-template-c4b3a9dd6c6c6aeeb319177e055b1a4c_screen.jpg?ts=1650360642')]">
                            <div className="card-body justify-end mb-20">
                                <h2 className="text-5xl max-w-lg uppercase text-white font-bold">Lorem ipsum dolor sit amet</h2>
                                <p className='flex-grow-0 text-5xl font-bold uppercase text-outline'>If a 2023?</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-wide mt-5 btn-accent bg-teal-400">Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-none card min-h-[600px] bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply w-11/12 shadow-xl bg-[url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-banner-design-template-c4b3a9dd6c6c6aeeb319177e055b1a4c_screen.jpg?ts=1650360642')]">
                            <div className="card-body justify-end mb-20">
                                <h2 className="text-5xl max-w-lg uppercase text-white font-bold">Lorem ipsum dolor sit amet</h2>
                                <p className='flex-grow-0 text-5xl font-bold uppercase text-outline'>If a 2023?</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-wide mt-5 btn-accent bg-teal-400">Get Tickets</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='bg-gray-100 min-h-screen right-4 w-1/5 fixed'>

                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}
