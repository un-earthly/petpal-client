import DashboardLayout from '@/src/layout/DashboardLayout'
import React from 'react'
import { servicesData } from '../data';
import ServiceCard from '@/src/components/ServiceCard';

export default function dashboard() {
    const notifications = [
        {
            id: 1,
            title: 'New Message',
            content: 'You have a new message from your pet sitter.',
            type: "error"
        },
        {
            id: 2,
            title: 'Booking Confirmation',
            content: 'Your pet grooming appointment has been confirmed.',
            type: "success"
        },
        {
            id: 2,
            title: 'Booking Confirmation',
            content: 'Your pet grooming appointment has been confirmed.',
            type: "info"
        },
        {
            id: 2,
            title: 'Booking Confirmation',
            content: 'Your pet grooming appointment has been confirmed.',
            type: "warning"
        },
    ];
    const user = { name: "jane doe", gender: "female" }

    return (
        <DashboardLayout>
            <div className='bg-gray-50'>

                <section className="text-gray-600 body-font pt-10">
                    <div className="container mx-auto flex flex-col items-center justify-center px-5">
                        <img
                            className="object-cover object-center rounded-full block mx-auto rounded-ful"
                            alt="hero"
                            src="https://randomuser.me/api/portraits/women/83.jpg"
                        />
                        <div className="w-full lg:pl-24 md:pl-16 flex flex-col md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl my-4 text-3xl mb-4 font-medium text-gray-900">
                                Welcome to PetPal Dashboard{' '}
                                {user.gender !== 'male' ? `Ms. ${user.name}` : `Mr. ${user.name}`}
                            </h1>

                            <p className="leading-relaxed">
                                Simplify the process of finding, booking, and managing pet care services with PetPal. Whether you're a pet owner seeking reliable pet care services or a service provider looking to expand your reach, PetPal offers a seamless, all-in-one solution.
                            </p>
                         
                        </div>
                    </div>
                </section>

                <div className="p-card p-4 mb-4">
                    <h2 className="text-2xl font-bold text-center">Featured Services</h2>
                    <div className="flex justify-center">
                        <div className="my-5">
                            <div className="join">
                                <div>
                                    <div>
                                        <input className="input input-bordered join-item" placeholder="Search" />
                                    </div>
                                </div>
                                <select className="select select-bordered join-item">
                                    <option disabled selected>Filter</option>
                                    <option>Sci-fi</option>
                                    <option>Drama</option>
                                    <option>Action</option>
                                </select>
                                <div className="indicator">
                                    <button className="btn join-item">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                servicesData.map(data => <ServiceCard service={data} />)
                            }
                        </div>
                        <button className='btn btn-outline btn-accent btn-wide my-4 block mx-auto'>Browse Services</button>
                    </div>
                </div>

                <div className="w-full bg-gray-100 p-4 mb-4">
                    <h2 className="text-xl font-bold mb-4 text-center">Notifications</h2>
                    <div className="space-y-4 w-2/3 mx-auto">
                        {notifications.map((notification) => (
                            <div
                                className={`border rounded-lg p-4 bg-gray-100 border-gray-300 ${notification.type === "success"
                                    ? "bg-green-100 border-green-300"
                                    : notification.type === "error"
                                        ? "bg-red-100 border-red-300"
                                        : notification.type === "info"
                                            ? "bg-blue-100 border-blue-300"
                                            : "bg-yellow-100 border-yellow-300"
                                    }`}
                                key={notification.id}
                            >
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 h-6 w-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-800">{notification.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}
