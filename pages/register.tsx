import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault();
    };

    return (

        <div className="flex min-h-screen items-center bg-gray-100 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-xl font-extrabold text-center">
                    PETPAL
                </h1>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSignup}>
                    <input type="text"

                        disabled={isLoading}
                        placeholder="Name"
                        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={name} onChange={e => setName(e.target.value)} />

                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    />
                    <button type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                        disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                {isError && (
                    <p style={{ color: 'red' }}>
                        Registration failed. Please check Inputs.
                    </p>
                )}
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
                Already a member?{' '}
                <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Start Here
                </Link>
            </p>
        </div>
    );
};

export default Signup;
