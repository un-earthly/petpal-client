import Loading from '@/pages/loading'
import Link from 'next/link'
import React, { ReactNode, Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { removeItem } from '../utils/useLocalStorage'
import { useAuth } from '../context/authContext'
import PrivateRoute from '../PrivateRoute'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const navigator = useRouter();
    const [userRole, setUserRole] = useState("");
    const { user, isLoading } = useAuth();
    const handleLogout = () => {
        removeItem("user");
        navigator.push("/login")
    }
    useEffect(() => {
        console.log(user && user.role)

        if (user && user.role === "ADMIN") {
            setUserRole("ADMIN")
        }
        if (user && user.role === "SUPER_ADMIN") {
            setUserRole("SUPER_ADMIN")
        }
        if (user && user.role === "USER") {
            setUserRole("USER")
        }
    }, [user])

    if (isLoading) {
        return <p>loading...</p>
    }
    const links = <>
        <Link href="/">
            <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Home</li>
        </Link>
        {
            userRole === "USER" && <>
            <Link href="/dashboard">
                <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Dashboard</li>
            </Link>
            <Link href="/dashboard/bookings">
                <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">My Bookings</li>
            </Link>
            <Link href="/dashboard/pets">
                <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">My Pets</li>
            </Link>
        </>
        }
        <Link href="/dashboard/profile">
            <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">My Profile</li>
        </Link>
        {
            userRole === "USER" && <Link href="/dashboard/feedback">
                <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">My Feedback & Suggestions</li>
            </Link>
        }
        {
            userRole === "ADMIN" && <>
                <Link href="/dashboard/manage/user">
                    <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Manage Users</li>
                </Link>
                <Link href="/dashboard/manage/services">
                    <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Manage Services</li>
                </Link>
                <Link href="/dashboard/manage/bookings">
                    <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Manage Bookings</li>
                </Link>
                <Link href="/dashboard/manage/contents">
                    <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Manage Contents</li>
                </Link>
            </>
        }

        {
            userRole === "SUPER_ADMIN" && <Link href="/dashboard/manage/admin">
                <li className="hover:bg-gray-200 duration-200 cursor-pointer p-2 rounded">Manage Admins</li>
            </Link>
        }
        {
            user && <li onClick={() => handleLogout()} className="btn btn-error btn-sm rounded">Logout</li>
        }

    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <div className='flex items-center justify-between w-3/4 p-3 lg:hidden'>
                    <Link href="/">Home</Link>

                    <label htmlFor="my-drawer-2" className="btn btn-sm btn-ghost drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="w-10/12 mx-auto py-10">
                    <PrivateRoute>
                        <Suspense fallback={<Loading />}>
                            {children}
                        </Suspense>
                    </PrivateRoute>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-base-200 space-y-4 text-base-content">
                    {links}
                </ul>

            </div>
        </div>
    )
}
