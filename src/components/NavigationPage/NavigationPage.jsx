import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = () => {
    return (
        <div className='w-full h-navigation  bg-navigation '>
            <div className='w-full h-16 flex items-center justify-between p-5 pt-0 pb-0 '>
                <h2 className='text-2xl text-white font-mono ' >Навігація</h2>
                <Link to="/">

                    <button className='w-10 h-10  rounded-full hover:bg-emerald-500 hover:text-black text-2xl text-white font-medium'>
                        X
                    </button>
                </Link>
            </div>
            <div className='w-full h-pages flex justify-center pt-14'>
                <div className='w-40 h-96 flex flex-col justify-around'>
                    <Link to="/">
                        <p className='text-4xl text-white font-mono'>Головна</p>
                    </Link>
                    <Link to="/news">
                        <p className='text-4xl text-white font-mono'>Новини</p>
                    </Link>
                    <Link to="/lessons">
                        <p className='text-4xl text-white font-mono'>Уроки</p>
                    </Link>
                    <Link to="/gallery">
                        <p className='text-4xl text-white font-mono'>Галерея</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NavigationPage