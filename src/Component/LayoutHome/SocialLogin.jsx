import React from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FcGoogle size={25}/> Login With Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaSquareGithub size={25}/> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;