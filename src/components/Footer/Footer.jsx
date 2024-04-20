

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' w-full h-auto min-h-80 bg-black flex flex-wrap items-center justify-between text-center footer  p-3 pr-7'>


            <div className='w-auto min-w-72 max-w-80 h-60  m-1'>
            <h2 className=' text-xl text-center   text-white font-medium'>Навігація</h2>
            <p className=' text-lg font-mono text-white p-1 hover:text-green '>
                    <Link to="/">Головна</Link>
                </p>
                <p className=' text-lg font-mono text-white p-1 hover:text-green'>
                    <Link to="/gallery">Галерея</Link>
                </p>
                <p className=' text-lg font-mono text-white p-1 hover:text-green'>
                    <Link to="/news">Новини</Link>
                </p>

                <p className=' text-lg font-mono text-white p-1 hover:text-green'>
                    <Link to="/lessons">Уроки</Link>
                </p>
            </div>
            <div className='w-auto min-w-72 max-w-80 h-60  m-1'>
                <h2 className=' text-xl text-center   text-white font-medium'>Адреса</h2>
                <p className=' text-lg font-mono text-white p-1 hover:text-green'>81050 смт. Шкло вулиця Т.Шеченка 1
                    Яворіського району Львівської області</p>
                <a href="https://www.google.com/maps/dir/49.9613696,23.5470848/%D1%88%D0%BA%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D1%88%D0%BA%D0%BE%D0%BB%D0%B0/@49.9588536,23.5429642,16.7z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x473b3dbb45fa7973:0xe4ca5c0e575e91b7!2m2!1d23.5453349!2d49.9569949?entry=ttu">

                    <button className='w-44 h-12 bg-black rounded-md border border-b-white mt-3'>
                        <p className='text-center text-xl text-white font-mono'>Маршут</p>
                    </button>
                </a>
            </div>
            <div className='w-auto min-w-72 max-w-96 h-60  m-1 flex flex-col p-2'>
                <h2 className='text-xl text-center   text-white font-medium'>Контакти</h2>
                <a href="https://www.facebook.com/ShkolaShklo" className='text-lg font-mono text-white p-1 hover:text-green'>facebook</a>
                <a href="https://www.instagram.com/school_shklo" className='text-lg font-mono text-white p-1 hover:text-green'>instagram</a>
                <p className='text-lg font-mono text-white p-1 hover:text-green'>тел: 032-595-0548</p>
                <p className='text-lg font-mono text-white p-1 hover:text-green'>Email: shkolashklo@gmail.com</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.8968018276873!2d23.5427556758687!3d49.95703832276865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b3dbb45fa7973%3A0xe4ca5c0e575e91b7!2z0KHQl9Ce0Kgg0YHQvNGCLtCo0LrQu9C-!5e0!3m2!1suk!2sua!4v1712165119547!5m2!1suk!2sua" width="320" height="290"></iframe>


        </div>
    )
}

export default Footer