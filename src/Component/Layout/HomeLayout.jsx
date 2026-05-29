import React from 'react'
import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import Header from '../Header/Header'
import LatestNews from '../LatestNews/LatestNews'
import Navbar from '../Navbar/Navbar'
import LeftAside from '../LayoutHome/LeftAside'
import RightAside from '../LayoutHome/RightAside'
import NewsDetails from '../Pages/NewsDetails'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import loading from 'daisyui/components/loading'
import Loading from 'daisyui/components/loading'


export const HomeLayout = () => {
    const {state } = useNavigation();
    return (
        <div>
            
            <header>
                
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto my-3 '>
                    <Navbar></Navbar>
                </section>
            </header>

            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                    {state=="loading" ? <Loading/> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>

            </main>
            <div>
                <h1>magnet ismail</h1>
                <div className="bg-gray-900 text-white mt-10">

                    {/* Main Footer Section */}
                    <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Brand Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-orange-400">
                                Dragon News
                            </h2>
                            <p className="text-gray-400 mt-3 text-sm leading-6">
                                Stay updated with the latest news, live TV channels,
                                and breaking stories all in one place.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h3>

                            <div className="flex flex-col gap-2 text-gray-300 text-sm">
                                <NavLink to="/" className="hover:text-orange-400">
                                    Home
                                </NavLink>
                                <NavLink to="/about" className="hover:text-orange-400">
                                    About
                                </NavLink>
                                <NavLink to="/auth/login" className="hover:text-orange-400">
                                    Login
                                </NavLink>
                                <NavLink to="/auth/register" className="hover:text-orange-400">
                                    Register
                                </NavLink>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Contact Info
                            </h3>

                            <p className="text-gray-400 text-sm">
                                📧 hossain22205101797@diu.edu.bd
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                📞 +880 1770780629
                            </p>

                            {/* Social Buttons */}
                            <div className="flex gap-3 mt-5">
                                <a
                                    href="https://www.facebook.com/share/1DmV8MEkAy/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-circle btn-sm btn-secondary"
                                >
                                    <FaFacebookSquare />
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-circle btn-sm btn-secondary"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-circle btn-sm btn-secondary"
                                >
                                    <FaInstagramSquare />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Dragon News. All rights reserved.
                    </div>

                </div>
            </div>
            
        </div>
    )
}
