import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import news from '../../../newsData/newsData.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const News = ({ isTheme }) => {
    const [searchName, setSearchName] = useState('');
    

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(searchName.toLowerCase())
    
    )
    
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='w-full h-auto  ' style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',
            padding: '5px',
        }}>
            <div className='w-full h-14 flex justify-between items-center  '>
                <Link to="/">
                    <button className='w-9 h-9 bg-black rounded-md text-2xl text-white font-mono'>

                        {`<`}


                    </button>
                </Link>
                <div className='w-11/12 h-full flex items-center justify-center '>
                    <div className='w-auto h-full flex items-center justify-around  '>
                        <h2 className='text-2xl font-medium title '>Новини</h2>
                        <div className='w-96 h-full rounded-2xl flex items-center justify-end'>
                            <input
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                type="text"
                                placeholder='Пошук новин...'
                                className='w-5/6 h-12 text-lg  bg-transparent rounded-3xl  placeholder:text-lg outline-none pl-5'
                            />
                            <div className='w-11 h-11 bg-button rounded-md flex items-center justify-center relative right-8'>
                                <img className='w-5 h-5' src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {
                news.length > 0 ? (
                    <div className='w-full h-auto '>


                        {filteredNews.length > 0 ? (
                            <div className='w-full  h-auto flex flex-wrap justify-center   pl-5 '>
                                {filteredNews.map((item, index) => (
                                    <div data-aos="fade-up" key={index} className='w-auto min-w-news-card max-w-news-card min-h-96 h-auto  rounded-xl flex flex-col justify-center items-center m-3 pt-2'>
                                  
                                            <img className='w-11/12 h-96 rounded' src={item.image} alt="" />
                                     
                                        <div className='w-11/12 h-auto  pt-3'>
                                            <div className=' w-full h-auto flex items-center justify-between'>
                                                <h2 className='sm:text-3xl text-3xl  font-medium'>{item.title}</h2>
                                            </div>
                                            <div className='w-full h-auto pt-2'>
                                                <p className='text-lg  font-medium'>{item.description}</p>
                                            </div>
                                            <div className='w-full h-auto pt-1 flex justify-end pr-2'>
                                                <p className='text-lg  font-medium'>{item.createdDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='w-full h-loader text-3xl font-mono text-gray-500 flex items-center justify-center'>Не знайдено</div>
                        )}
                    </div >
                ) : (
                    <div className='w-full h-loader  text-3xl font-mono text-gray-500 flex items-center justify-center'>Під'єднання...</div>
                )
            }


        </div >
    );
};

export default News;
