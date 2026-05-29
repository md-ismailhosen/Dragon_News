import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import RightAside from '../LayoutHome/RightAside';
import CurrentTime from '../CurrenTime/CurrentTime';

const NewsDetails = () => {

    const allNews = useLoaderData();
    const { id } = useParams();

    const news = allNews.find(item => String(item.id) == id);

    return (
        <div>
            <div>
                <Header></Header>
                <NavLink to="/" className="btn btn-secondary  ml-15">
                    Home
                </NavLink>
            </div>
            <div className='flex p-15 gap-5 '>
                <div>
                    <h1 className='text-4xl text-secondary'>Dragon News</h1>
                    <h1>{news.title}</h1>

                    <img src={news.image_url} alt="" />

                    <p>{news.details}</p>
                </div>
                <div>
                    <RightAside></RightAside>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;