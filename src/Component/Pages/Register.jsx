import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const Register = () => {
    const [nameError, setNameError] = useState();
    const [passwordError, setPasswordError] = useState();
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e)=>{
        e.preventDefault();
        //console.log(e.target);
        const form = e.target;

        const name = form.name.value;
        if(name.length < 5){
            setNameError("Name should be more then 5 character");
            return;
        }else{
            setNameError("");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 8){
            setPasswordError("password should be more then 8 character");
        }else{
            setPasswordError("");
        }
        //console.log(name, photo, email, password);

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            //console.log(user)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode ,errorMessage);

        });
        
    };
    return (
        <div className='flex justify-center  items-center,'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold flex justify-center py-5'>Please Register</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name " required />
                        {
                            nameError && <p className='text-red-500 text-sm'>{nameError}</p>
                        }

                        {/* Phone Number */}
                        <label className="label">Phone Number</label>
                        <input name='phone' type="tel" className="input" placeholder="Enter your phone Number" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        {
                            passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <div><a className="link link-hover"></a>already have a account? <Link to="/auth/login"><span className='text-red-500 hover:text-blue-600'>Login</span></Link> </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;