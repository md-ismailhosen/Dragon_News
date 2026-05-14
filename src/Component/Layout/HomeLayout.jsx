import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import LatestNews from '../LatestNews/LatestNews'
import Navbar from '../Navbar/Navbar'
import LeftAside from '../LayoutHome/LeftAside'
import RightAside from '../LayoutHome/RightAside'


export const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto my-3 '>
                    <Navbar></Navbar>
                </section>
            </header>

            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    )
}
