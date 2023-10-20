import IService from '@/src/interfaces/service.interface';
import UserLayout from '@/src/layout/UserLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function cart() {
    const [serviceData, setServiceData] = useState<IService[] | null>(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("service") || "[]");
        setServiceData(storedData);
        setLoading(false)
    }, []);


    const totalAmount = serviceData
        ? serviceData.reduce((total, service) => total + parseFloat(service.pricing), 0)
        : 0;
    return (
        <UserLayout>
            <div className="flex flex-col p-6 space-y-4 sm:p-10">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {loading ? (
                        <span className="loading loading-infinity loading-lg"></span>
                    ) : serviceData && serviceData.length > 0 ? (
                        serviceData.map((service: IService, index) => (
                            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32 " src={service.image} alt="Service" />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-semibold leadi sm:pr-8">{service.title}</h3>
                                                <p className="text-sm ">{service.selectedTime}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold">{service.pricing}$</p>
                                            </div>
                                        </div>
                                        <div className="flex text-sm divide-x">
                                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">

                                                <span>Remove</span>
                                            </button>
                                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                                </svg>
                                                <span>Add to favorites</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))) : <div>
                        <h1 className="text-xl text-red-500 ">Please add some services</h1>
                        <Link href="/services" className='btn btn-info'>Add Some</Link>
                    </div>}


                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold">{totalAmount} €</span>
                    </p>
                </div>
                <div className="flex justify-end space-x-4">
                    <button type="button" className="px-6 py-2 border rounded-md duration-200">Back {" "}
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md hover:bg-accent border-accent duration-200">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
        </UserLayout>

    )
}
