import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Care = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    // input change handler
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully 🚀");
        //console.log(form);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div>
            <div className=' '>
                <div className="text-center ">
                    <h1 className="text-4xl font-bold">Care & Support</h1>
                    <p className="text-gray-500 mt-2">We are here 24/7</p>
                </div>
                <NavLink to="/" className="btn btn-secondary ml-2 ">
                    Home
                </NavLink>
            </div>
            <div className="min-h-screen bg-gray-100 p-6">
                

                {/* Header */}


                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    {/* Call */}
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h2 className="text-xl font-semibold">Call Us</h2>
                        <p className="text-gray-500 mt-2">+880 123 456 789</p>

                        <a href="tel:+880123456789" className="btn btn-primary mt-4 w-full">
                            Call Now
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h2 className="text-xl font-semibold">Email Us</h2>
                        <p className="text-gray-500 mt-2">support@gmail.com</p>

                        <a
                            href="mailto:support@gmail.com"
                            className="btn btn-secondary mt-4 w-full"
                        >
                            Send Email
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h2 className="text-xl font-semibold">WhatsApp Chat</h2>
                        <p className="text-gray-500 mt-2">Fast support</p>

                        <a
                            href="https://wa.me/880123456789"
                            target="_blank"
                            className="btn btn-accent mt-4 w-full"
                        >
                            Chat Now
                        </a>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow max-w-2xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Send Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            required
                        />

                        <button className="btn btn-primary w-full">
                            Send Message
                        </button>

                    </form>

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

export default Care;