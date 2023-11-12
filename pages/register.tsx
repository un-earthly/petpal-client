import { useAuth } from '@/src/context/authContext';
import { registerApi } from '@/src/route';
import { setItem } from '@/src/utils/useLocalStorage';
import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, setError, setLoading, isLoading , isError} = useAuth();
    const navigate = useRouter();
    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        if (!name || !email || !password) {
            setError("Please Check Fillup The Form")
            setLoading(false)
            return
        }
        axios.post(registerApi, {
            name,
            email,
            password,
            role: "USER"
        })
            .then(res => {
                setItem("user", JSON.stringify(res.data.data))
                console.log(res.data.data.token)
                login(res.data.data.user);
                toast.success(res.data.data.message)
                navigate.push("/dashboard")
            })
            .catch(err => {
                setError(err.response.data.errorMessages);
                console.log(err)
            })
            .finally(() => setLoading(false))
    }

    return (


        <div className="flex min-h-screen items-center bg-gray-100 flex-col justify-center px-6 py-12 lg:px-8">
            <Head>
                <title>Registration - PetPal</title>
            </Head>
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
                        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        value={name} onChange={e => setName(e.target.value)}
                        required

                    />

                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        required
                        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"

                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        required

                    />  {isError && (
                        <p style={{ color: 'red' }}>
                            {isError}
                        </p>
                    )}
                    <button type="submit"
                        className='btn btn-accent w-full btn-sm rounded'
                        disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>

            </div>

            <p className="mt-5 text-center text-sm text-gray-500">
                Already a member?{' '}
                <Link href="/login" className="font-semibold leading-6 text-cyan-500 hover:text-cyan-600">
                    Start Here
                </Link>
            </p>

            {/* <div className="divider w-1/3 mx-auto">OR</div> */}
            {/* <SocialSignIn /> */}
        </div>
    );
};

export default Signup;
