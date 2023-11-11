import Image from 'next/image';
import React, { useState } from 'react';
import SchedulingModal from './SchedulingModal';
import { useRouter } from 'next/router';

export default function ServiceCard({ service }: { service: any }) {


    const navigate = useRouter().push;

    return (
        <div className="card h-96 overflow-hidden group bg-base-100 shadow-xl image-full">
            <figure>
                <Image fill className="group-hover:scale-125 duration-300" src={service.image} alt="Service" />
            </figure>
            <div className="card-body">
                <div className='flex-1'>
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                    <p>${service.pricing} / Per hour</p>
                </div>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="btn btn-accent font-bold duration-200 btn-outline rounded-full"
                    >
                        Details
                    </button>
                </div>
            </div>

        </div>
    );
}
