import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            
            <h1>Home Page</h1>

            <Navigate to="/category/1" />
        </div>
    );
};

export default Home;