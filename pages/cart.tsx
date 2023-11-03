import CartSkeleton from '@/src/Skeleton/CartSkeleton';
import IService from '@/src/interfaces/service.interface';
import UserLayout from '@/src/layout/UserLayout';
import { setItem } from '@/src/utils/useLocalStorage';
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
    const removeAllFromCart = () => {
        setServiceData([]);
        setItem("service", serviceData)
    };
    const removeOneFromCart = (id: Number) => {
        const removedItem = serviceData?.filter((s: IService) => s.id !== id);
        setServiceData(removedItem ? removedItem : [])
        setItem("service", JSON.stringify(removedItem))
    };
    return (
        <UserLayout>
            <div className="flex flex-col p-6 space-y-4 sm:p-10">
                <div className="flex item-center justify-between">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <div onClick={removeAllFromCart} className="btn btn-error btn-sm rounded-full h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>
                <ul className="flex flex-col divide-y space-y-4 divide-gray-700">
                    {loading ? (
                        [1, 2, 3, 4].map(e => <CartSkeleton key={e} />
                        )
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
                                        <div className="flex text-sm divide-gray-700 divide-x">
                                            <button onClick={() => removeOneFromCart(service.id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">

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

                        <h1 className="text-xl text-center my-5 text-red-500 ">Please add some services</h1>
                        <Link href="/services" className='btn btn-accent mt-4'>Add Some</Link>
                    </div>}
                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold">{totalAmount} $</span>
                    </p>
                </div>
                {serviceData && serviceData.length > 0 && <div className="flex justify-end space-x-4">
                    <Link href="/services" className="px-6 py-2 border rounded-md duration-200">Back {" "}
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </Link>
                    <Link href="/checkout" className="px-6 py-2 border rounded-md hover:bg-accent border-accent duration-200">
                        <span className="sr-only sm:not-sr-only">Continue to {" "}</span>Checkout
                    </Link>
                </div>}
            </div>
        </UserLayout>

    )
}
