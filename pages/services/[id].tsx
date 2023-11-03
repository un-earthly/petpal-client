import ReviewCard from '@/src/components/ReviewCard';
import IService from '@/src/interfaces/service.interface';
import UserLayout from '@/src/layout/UserLayout'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import SchedulingModal from '@/src/components/SchedulingModal';
import axios from 'axios';
import { getServiceDetailsApi } from '@/src/route';
import { servicesData } from '../data';

export default function ServiceDetails() {
    const [loading, setLoading] = useState(true);
    const param = useParams();
    const [service, setServiceDetails] = useState<Partial<IService> | null>(null);
    useEffect(() => {
        if (param) {
            setServiceDetails(servicesData[Number(param.id)])
            axios.get(getServiceDetailsApi(Number(param.id)))
                .then(res => {
                    console.log(res);
                    setServiceDetails(res.data.data.service);
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }


    }, [param])
    const reviews = [
        {
            id: 1,
            rating: 5,
            comments: 'Great service! Highly recommended.',
        },
        {
            id: 2,
            rating: 4,
            comments: 'Good experience with this service.',
        },
    ];



    const [isModalOpen, setIsModalOpen] = useState(false);
    const sampleAvailableTimeSlots = [
        { time: '08:00 AM', isAvailable: true },
        { time: '09:00 AM', isAvailable: true },
        { time: '10:00 AM', isAvailable: false },
        { time: '11:00 AM', isAvailable: true },
        { time: '01:00 PM', isAvailable: true },
        { time: '02:00 PM', isAvailable: true },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    if (loading) {
        return <div className='lg:p-24'>
            <div className="lg:max-w-[1280px] px-5 mx-auto flex flex-col">
                <div className="w-full mx-auto">
                    <div className="rounded-lg h-[400px] bg-gray-300">
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center bg-gray-400 p-10 text-center justify-center">
                                <p className="bg-gray-100 h-9 animate-pulse mb-3 w-2/3"></p>
                                <div className="w-12 h-1 bg-gray-100 rounded mt-2 mb-4"></div>
                                <p className="bg-gray-100 h-7 animate-pulse w-1/3"></p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:p-8 sm:py-8 sm:border-l bg-gray-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0">
                            <div className="bg-gray-100 h-4 animate-pulse mb-4"></div>
                            <div className="bg-gray-100 animate-pulse h-14 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 lg:max-w-[1280px] mx-auto">
                <h2 className="bg-gray-300 rounded h-10 w-1/3 mx-auto animate-pulse"></h2>
                <div className="flex items-center justify-between gap-5 p-4 px-9 animate-pulse rounded -m-4 bg-gray-300 h-96 mt-5">
                    <div className="bg-gray-100 h-80 w-3/4 rounded animate-pulse"></div>
                    <div className="bg-gray-100 h-80 w-3/4 rounded animate-pulse"></div>
                </div>
            </div>

        </div>
    }


    return (
        <UserLayout>
            <section className="text-gray-600 p-10 body-font">
                <div className="lg:max-w-[1280px] px-5 mx-auto flex flex-col">
                    <div className="w-full mx-auto">
                        <div className="rounded-lg ">
                            <img
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src={service?.image}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                                        {service?.title}
                                    </h2>
                                    <div className="w-12 h-1 bg-cyan-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">${service?.pricing}</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">{service?.description}</p>
                                <a onClick={openModal} className="text-cyan-500 cursor-pointer inline-flex items-center">
                                    Book Now
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:max-w-[1280px] mx-auto">
                    <h2 className="text-2xl text-center my-10 font-semibold">Clients Satisfactions</h2>
                    <div className="flex flex-wrap -m-4">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
                <SchedulingModal availableTimeSlots={sampleAvailableTimeSlots} isOpen={isModalOpen} onClose={closeModal} service={service} />
            </section>
        </UserLayout>
    )
}
