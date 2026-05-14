import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    return (
        <Navigate to="/category/1">
            <div>
                <h1>home page</h1>
            </div>
        </Navigate>
    );
};

export default Home;