import Footer from 'daisyui/components/footer';
import Link from 'daisyui/components/link';

import React from 'react';
import { NavLink } from 'react-router-dom';

const channels = [
    {
        image: "https://upload.wikimedia.org/wikipedia/en/c/c4/SOMOY_TV_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        name: "Somoy TV",
        logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/Somoy_TV_Logo.svg",
        live: "https://www.youtube.com/embed/_HQh08dd5nA",
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnVTGTS7dX3rjTijOIpVh-oUAnzdzKX_9-g&s",
        name: "Jamuna TV",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Jamuna_Television_Logo.svg",
        live: "https://www.youtube.com/embed/7Pr1g73RULo",
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/1/18/ATN_News_Logo_without_slogan.svg/1280px-ATN_News_Logo_without_slogan.svg.png",
        name: "ATN News",
        logo: "https://seeklogo.com/images/A/atn-news-logo-4A2A0A5A1E-seeklogo.com.png",
        live: "https://www.youtube.com/embed/6fS0w3P0P4A",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Channel_1_Logo_Bangladesh.png",
        name: "Channel i",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Channel_i.svg",
        live: "https://www.youtube.com/embed/9gS8r8k8KQ8",
    },
    {
        image: "https://cdn.vectorstock.com/i/1000v/99/40/dbc-logo-letter-design-vector-41339940.jpg",
        name: "DBC News",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/DBC_News_logo.png",
        live: "https://www.youtube.com/embed/R7X7JQ6z6KQ",
    },
    {
        image: "https://timetvplus.com/uploads/tv_image/independent-tv.jpg",
        name: "Independent TV",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Independent_Television_logo.png",
        live: "https://www.youtube.com/embed/NF1V6Xk8L3E",
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Ekattor_TV_logo.svg/500px-Ekattor_TV_logo.svg.png",
        name: "Ekattor TV",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Ekattor_TV_logo.png",
        live: "https://www.youtube.com/embed/4W3m5Y4VQ7M",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuM3m7Zq5GbHs9T5TMLuu4rNKRKR6rmPSrAw&s",
        name: "News24",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/News24_Bangladesh_logo.png",
        live: "https://www.youtube.com/embed/g6f5K9X2eWs",
    },
];

const About = () => {
    return (
        <div>
            <div className=' bg-gray-600 '>
                <h1 className="text-3xl font-bold text-center pt-5 ">
                    All News Here
                </h1>
                <NavLink to="/" className="btn btn-secondary ml-2 ">
                    Home
                </NavLink>
            </div>
            <div className='relative bg-gray-200  '>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 ">

                    {channels.map((channel, index) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow-xl border border-gray-200"
                        >

                            {/* Logo */}
                            <div className="flex justify-center pt-5">
                                <img
                                    src={channel.image}
                                    alt={channel.name}
                                    className="h-20 object-contain"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="card-body items-center text-center">

                                <h2 className="card-title">
                                    {channel.name}
                                </h2>

                                {/* LIVE Badge */}
                                <div className="badge badge-error text-white animate-pulse">
                                    LIVE
                                </div>

                                {/* Live Button */}
                                <a
                                    href={channel.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary mt-3 w-full hover:bg-orange-500"
                                >
                                    Watch Live
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div>
                <footer className="bg-gray-900 text-white mt-10">

                    <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Brand */}
                        <div>
                            <h2 className="text-2xl font-bold text-orange-400">
                                Dragon News
                            </h2>
                            <p className="text-gray-400 mt-3 text-sm">
                                Stay updated with the latest news, live TV, and breaking stories all in one place.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

                            <div className="flex flex-col gap-2 text-gray-300">
                                <NavLink to="/" className="hover:text-orange-400">Home</NavLink>
                                <NavLink to="/about" className="hover:text-orange-400">About</NavLink>
                                <NavLink to="/auth/login" className="hover:text-orange-400">Login</NavLink>
                                <NavLink to="/auth/register" className="hover:text-orange-400">Register</NavLink>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Contact</h3>

                            <p className="text-gray-400 text-sm">
                                Email: support@dragonnews.com
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                Phone: +880 123 456 789
                            </p>

                            <div className="flex gap-3 mt-4">
                                <a className="btn btn-circle btn-sm">f</a>
                                <a className="btn btn-circle btn-sm">in</a>
                                <a className="btn btn-circle btn-sm">x</a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
                        © {new Date().getFullYear()} Dragon News. All rights reserved.
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default About;