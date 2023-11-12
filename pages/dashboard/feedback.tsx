import DashboardLayout from '@/src/layout/DashboardLayout'
import Head from 'next/head';
import React, { useState } from 'react'

export default function feedback() {
    const [feedback, setFeedback] = useState<string>('');
    const [feedbackList, setFeedbackList] = useState<string[]>([]);

    const handleFeedbackChange = (e: any) => {
        setFeedback(e.target.value);
    };

    const handleFeedbackSubmit = () => {
        if (feedback.trim() !== '') {
            setFeedbackList([...feedbackList, feedback]);
            setFeedback('');
        }
    };
    return (
        <DashboardLayout>
            <Head>
                <title>Feedback - PetPal</title>
            </Head>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Feedback</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We'd love to hear your feedback! Please share your thoughts with us.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <textarea
                                        id="feedback"
                                        name="feedback"
                                        value={feedback}
                                        onChange={handleFeedbackChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    onClick={handleFeedbackSubmit}
                                    className="btn btn-accent rounded mx-auto block btn-wide"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {feedbackList.length > 0 && (
                    <div className="container mx-auto">
                        <h2 className="text-2xl font-semibold text-center my-10">Previous Feedback</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {feedbackList.map((item, index) => (
                                <div key={index} className="p-2">
                                    <div className="bg-gray-100 rounded p-4 h-full">
                                        <p className="text-base leading-relaxed">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </DashboardLayout>
    )
}
