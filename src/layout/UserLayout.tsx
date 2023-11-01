import Link from 'next/link'
import React, { ReactNode, Suspense, useState } from 'react'
import Footer from '../components/Footer'
import Loading from '@/pages/loading'

export default function UserLayout({ children }: { children: ReactNode }) {
    const user = false
    const [serchTerm, setSearchTerm] = useState("")
    const handleSearch = () => { }
    const menuLinks = <div className='flex items-center justify-center'>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/services">Services</Link>
        </li>
        {user ?
            <>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <Link href="/cart" className="card-actions">
                                    <button className="btn btn-accent btn-sm btn-block">View cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/user-1.jpg" alt="user" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-4 space-y-3 shadow menu menu-sm dropdown-content bg-base-100 rounded w-52">
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><button className='btn btn-sm btn-error hover:text-error'>Logout</button></li>
                    </ul>
                </div>
            </>
            :
            <>
                <li>
                    <Link href="/login">login</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </>
        }
    </div>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link href="/" className="flex-1 px-2 text-xl font-bold mx-2">Pet Pal</Link>
                    <div className="form-control">
                        <div className="input-group">
                            <input value={serchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Search…" className="input focus:outline-none input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className="min-h-screen">
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </div>
                <Footer />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {menuLinks}
                </ul>
            </div>
        </div>
    )
}
