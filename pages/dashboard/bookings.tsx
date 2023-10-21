import DashboardLayout from '@/src/layout/DashboardLayout';
import React from 'react';
const bookingHistory = [
    {
        id: 1,
        date: '2023-10-15',
        service: 'Pet Grooming',
        status: 'Delivered',
        isPaid: true,
    },
    {
        id: 2,
        date: '2023-10-10',
        service: 'Dog Walking',
        status: 'Pending',
        isPaid: false,
    },
    {
        id: 3,
        date: '2023-10-05',
        service: 'Pet Sitting',
        status: 'Pending',
        isPaid: true,
    },
];

const handleCancelOrder = (bookingId: number) => {
    console.log(`Order with ID ${bookingId} canceled`);
};

const BookingHistory = () => {
    return (
        <DashboardLayout>
            <div className="p-4 w-full flex flex-col">
                <h1 className="text-xl font-bold mb-4 px-5">Manage your Bookings</h1>
                <div className="bg-white p-4 rounded-lg shadow">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left align-top">Date</th>
                                <th className="px-4 py-2 text-left align-top">Service</th>
                                <th className="px-4 py-2 text-left align-top">Status</th>
                                <th className="px-4 py-2 text-left align-top">Payment</th>
                                <th className="px-4 py-2 text-left align-top">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingHistory.map((booking) => (
                                <tr key={booking.id} className="border-t">
                                    <td className="px-4 py-2 align-top">{booking.date}</td>
                                    <td className="px-4 py-2 align-top">{booking.service}</td>
                                    <td className="px-4 py-2 align-top">
                                        {booking.status}
                                    </td>
                                    <td className="px-4 py-2 align-top">{booking.isPaid ? "Paid" : "Unpaid"}</td>
                                    <td className="px-4 py-2 align-top">
                                        {!booking.isPaid ? (
                                            <button
                                                className="btn btn-error"
                                                onClick={() => handleCancelOrder(booking.id)}
                                            >
                                                Cancel Order
                                            </button>
                                        ) : (
                                            <button className="btn btn-success" disabled>
                                                { booking.status}
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default BookingHistory;
