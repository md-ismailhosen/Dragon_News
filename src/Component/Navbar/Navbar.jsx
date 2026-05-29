import React, { use, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../AuthContext/AuthContext';
import button from 'daisyui/components/button';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        //console.log("usr trying to LogOut");
        logOut()
        .then(() =>{
            alert("You Logged Out successfully");
        })
        .catch((error) =>{
            //console.log(error);
            
            
        });
    }
    return (
        <div className='flex justify-between '>
            {/* <div className="">{user && user.email }</div> */}
            <div className="flex gap-4 text-accent ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/care">Care</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={userIcon} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-5'>LogOut</button> : <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;