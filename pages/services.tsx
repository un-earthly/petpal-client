import ServiceCard from '@/src/components/ServiceCard';
import UserLayout from '@/src/layout/UserLayout';
import React from 'react'
import { servicesData } from "./data.js"
export default function services() {

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
                        {servicesData.map((service, index) => (
                            <ServiceCard service={service} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </UserLayout>

    )
}
