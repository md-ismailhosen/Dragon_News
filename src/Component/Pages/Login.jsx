import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const Login = () => {
    const [error, setError] = useState("");
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(location);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                //console.log(user);
                navigate(`${location.state? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;

                //console.log(errorCode);
                //console.log(errorMessage);
                setError(errorCode);
               /*  alert(errorCode, errorMessage); */
            });
    };
    return (
        <div className='flex justify-center  items-center,'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold flex justify-center py-5'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" required/>
                        
                        {/* phone number */}
                        <label className="label">Phone Number</label>
                        <input name="phone" type="tel" className="input" placeholder="Enter your number" required />
                        
                        {/* email */}
                        <label  className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />
                        
                        {/* password */}
                        <label  className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required/>
                        {
                            error && <p className='text-red-500 text-sm'>{error}</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <div><a className="link link-hover"></a>Don't have a account? <Link to="/auth/register"><span className='text-red-500 hover:text-blue-600'>Register</span></Link> </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;