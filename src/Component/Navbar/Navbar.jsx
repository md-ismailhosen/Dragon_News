import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className="">

            </div>
            <div className="flex gap-4 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/care">Care</NavLink>
            </div>
            <div className="login-btn flex">
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;