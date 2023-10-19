import UserLayout from '@/src/components/layout/UserLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function services() {
    const services = [
        {
            image: "/dog-walk.jpg",
            title: 'Dog Walking',
            description: 'Give your dog the exercise they need with our professional dog walking services.',
            pricing: "5"
        },
        {
            image: "/pet-boarding.jpg",
            title: 'Pet Boarding',
            description: 'Leave your pets in safe hands with our comfortable and secure pet boarding facilities.',
            pricing: "25"

        },
        {
            image: "/pet-grooming.jpg",
            title: 'Pet Grooming',
            description: 'Keep your pets looking their best with our grooming and spa treatments.',
            pricing: "15"

        },
        {
            image: "/pet-sitting.webp",
            title: 'Pet Sitting',
            description: `Trustworthy pet sitters to care for your pets when you're away from home.`,
            pricing: "2"
        },
        {
            image: "/pet-sitting.webp",
            title: 'Pet Sitting',
            description: `Trustworthy pet sitters to care for your pets when you're away from home.`,
            pricing: "10"
        },
    ];
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
                        {services.map((service, index) => (
                            <div key={index} className="card h-96 overflow-hidden group bg-base-100 shadow-xl image-full">
                                <figure>
                                    <Image fill className="group-hover:scale-125 duration-300" src={service.image} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className='flex-1'>
                                        <h2 className="card-title">{service.title}</h2>
                                        <p>{service.description}</p>
                                        <p>${service.pricing} / Per hour</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-accent font-bold duration-200 btn-outline rounded-full">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                      </div>
            </section>
        </UserLayout>

    )
}
