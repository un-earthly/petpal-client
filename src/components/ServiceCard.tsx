import Image from 'next/image';
import React, {useState} from 'react';
import SchedulingModal from './SchedulingModal';

export default function ServiceCard({ service }: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sampleAvailableTimeSlots = [
        { time: '08:00 AM', isAvailable: true },
        { time: '09:00 AM', isAvailable: true },
        { time: '10:00 AM', isAvailable: false }, 
        { time: '11:00 AM', isAvailable: true },
        { time: '01:00 PM', isAvailable: true },
        { time: '02:00 PM', isAvailable: true },
        // Add more time slots as needed
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


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
                        onClick={openModal}
                        className="btn btn-accent font-bold duration-200 btn-outline rounded-full"
                    >
                        Book Now
                    </button>
                </div>
            </div>
            <SchedulingModal availableTimeSlots={sampleAvailableTimeSlots} isOpen={isModalOpen} onClose={closeModal} service={service} />

        </div>
    );
}
