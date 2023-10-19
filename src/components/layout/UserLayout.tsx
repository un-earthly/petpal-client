import Link from 'next/link'
import React, { ReactNode } from 'react'
import Footer from '../Footer'

export default function UserLayout({ children }: { children: ReactNode }) {
    const user =true
    const menuLinks = <>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">Home</Link>
        </li>
        {user ?
            <>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://randomuser.me/api/portraits/women/88.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
    </>
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
                    <Link href="/home" className="flex-1 px-2 text-xl font-bold mx-2">Pet Pal</Link>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className="min-h-screen">
                    {children}
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

