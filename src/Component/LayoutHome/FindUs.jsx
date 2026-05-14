import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className=''>
            <h2 className='font-bold mb-5'>Find Us</h2>
            <div>
                <div className="join join-vertical lg:join-horizontal w-full">
                    <button className="btn bg-base-100 justify-start join-item"><FaFacebook />Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaSquareTwitter />Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaInstagramSquare />Instagram</button>
                </div>
            </div>
        </div>
    )
};

export default FindUs;