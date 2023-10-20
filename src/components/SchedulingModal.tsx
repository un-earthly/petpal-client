import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from "react-toastify"

type SchedulingModalProps = {
    isOpen: boolean;
    onClose: () => void;
    service: any;
    availableTimeSlots: { time: string; isAvailable: boolean }[]; // Array of time slots with availability status
};

const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose, service, availableTimeSlots }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const router = useRouter()
    const handleSchedule = () => {
        if (!selectedTime) {
            toast.error("Please Select A Date")
            return;
        }
        const existingData = localStorage.getItem("service");
        let serviceData;

        if (existingData) {
            const parsedData = JSON.parse(existingData);
            serviceData = [
                ...parsedData,
                {
                    ...service,
                    selectedTime
                }
            ];
        } else {
            serviceData = [
                {
                    ...service,
                    selectedTime
                }
            ];
        }

        localStorage.setItem("service", JSON.stringify(serviceData))
        router.push("/cart")
        onClose();
    };

    const availableTimes = availableTimeSlots.filter((slot) => slot.isAvailable);

    return (
        <div
            className={`fixed inset-0 z-50 overflow-y-auto transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div
                className="min-h-screen flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-white rounded-lg p-4 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Schedule Service</h2>
                    <div>
                        <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full border p-2 mb-4 rounded-lg"
                        >
                            <option value="" disabled>
                                Select a time slot
                            </option>
                            {availableTimes.map((timeSlot) => (
                                <option key={timeSlot.time} value={timeSlot.time}>
                                    {timeSlot.time}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleSchedule}
                        className="btn btn-primary w-full py-2 mt-4 rounded-lg"
                    >
                        Schedule
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SchedulingModal;
