import UserLayout from '@/src/layout/UserLayout'
import Head from 'next/head'
import React, { useState } from 'react'

const CheckoutForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <UserLayout>
            <Head>
                <title>Checkout - PetPal</title>
            </Head>
            <main className="p-6 h-full flex items-center  bg-gray-100 justify-center ">
                <form onSubmit={handleSubmit} className="max-w-md rounded-lg shadow-md bg-white p-4 space-y-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">Checkout</h1>
                    <div className="p-4 rounded">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Jhon Doe'
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input w-full focus:outline-none bg-gray-100 mb-4"
                        />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='jhondoe@email.com'
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input w-full focus:outline-none bg-gray-100 mb-4"


                        />

                        <input
                            type="number"
                            maxLength={19}
                            id="cardNumber"
                            name="cardNumber"
                            placeholder='Card Number'
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="input w-full focus:outline-none bg-gray-100 mb-4"

                        />

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    id="expirationDate"
                                    name="expirationDate"
                                    placeholder='Expiration Date'
                                    value={formData.expirationDate}
                                    onChange={handleInputChange}
                                    className="input w-full focus:outline-none bg-gray-100 mb-4"

                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    placeholder='CVV'
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    className="input w-full focus:outline-none bg-gray-100 mb-4"

                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-accent btn-outline w-full mt-6">
                            Pay
                        </button>
                    </div>
                </form>
            </main>
        </UserLayout>


    )
}

export default CheckoutForm
