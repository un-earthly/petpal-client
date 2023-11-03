import React from 'react'

export default function Tip({ tip }: { tip: string }) {
    return (
        <div className="p-5 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{tip}</span>
            </div>

        </div>
    )
}
