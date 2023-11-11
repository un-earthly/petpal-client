import { useAuth } from '@/src/context/authContext';
import { loginApi } from '@/src/route';
import { setItem } from '@/src/utils/useLocalStorage';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useRouter();
    const { login, setLoading, setError, isLoading, isError } = useAuth();
    const handleLogin = async (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();
        axios.post(loginApi, {
            email,
            password,
        })
            .then(res => {
                setItem("user", JSON.stringify(res.data.data))
                toast.success(res.data.data.message);
                login(res.data.data);
                navigate.push("/dashboard")
            })
            .catch(err => {
                setError(err.response.data.errorMessages);
                console.log(err)

            })
            .finally(() => setLoading(false))
    };

    return (
        <div className="flex min-h-screen items-center bg-gray-100 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-xl font-extrabold text-center">
                    PETPAL
                </h1>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        required

                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        required
                    />
                    <button type="submit"
                        className='btn btn-accent btn-sm rounded-md text-[12px] w-full'
                        disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {isError && (
                    <p style={{ color: 'red' }}>
                        Login failed. Please check your email and password.
                    </p>
                )}
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link href="/register" className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500">
                    Start Here
                </Link>
            </p>
        </div>
    );
}
