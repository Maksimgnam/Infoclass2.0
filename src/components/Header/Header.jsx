


import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';


const Header = ({ isTheme, themeChange }) => {
    return (
        <div className='w-full h-header bg-white z-50 flex items-center justify-between p-20 pt-0 pb-0 header '
         style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

            boxShadow: isTheme ? '' : '0 0 4px #ccc'
        }}>
            <Logo />
            <div className='w-4/12 h-10 flex items-center justify-between'>
                <a className=' text-lg  hover:text-emerald-500 link-text'>
                    <Link to="/">Головна</Link>
                </a>
                <a className=' text-lg  hover:text-emerald-500 link-text'>
                    <Link to="/news">Новини</Link>
                </a>
                <a className=' text-lg   hover:text-emerald-500 link-text'>
                    <Link to="/materials">Матеріали</Link>
                </a>
              
                <a className=' text-lg   hover:text-emerald-500 link-text'>
                    <Link to="/gallery">Галерея</Link>
                </a>

            </div>
            <div className='w-auto h-auto flex items-center'>
            <button className=' w-10 h-10  rounded-3xl hover:bg-emerald-400 flex items-center justify-center relative right-3' onClick={themeChange}>
                {
                    isTheme ? (

                        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/702/702471.png" alt="" />
                    ) : (
                        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/128/128832.png" alt="" />
                    )
                }

            </button>
            <button className='w-10 h-10 bg-button rounded-md flex items-center justify-center menu-bar'>
                <Link to='/navigation'>
                    <div className='w-8 h-7 flex flex-col items-center justify-around'>
                        <div className='w-9/12 h-1px bg-black rounded-xl'></div>
                        <div className='w-9/12 h-1px bg-black rounded-xl'></div>
                        <div className='w-9/12 h-1px bg-black rounded-xl'></div>
                    </div>
                </Link>

            </button>
            </div>
           

        

            {/* <button className='w-11 h-11 bg-button rounded-md flex items-center justify-center '>
                <div className='w-9 h-8 flex flex-col items-center justify-around'>
                    <div className='w-10/12 h-1 bg-black rounded-xl'></div>
                    <div className='w-10/12 h-1 bg-black rounded-xl'></div>
                    <div className='w-10/12 h-1 bg-black rounded-xl'></div>
                </div>

            </button> */}




        </div>
    )
}

export default Header