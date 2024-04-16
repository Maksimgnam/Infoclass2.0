import React, { useEffect, useState } from 'react';
import { isToday, isThisWeek, isThisMonth, isYesterday } from 'date-fns';
import { Link } from 'react-router-dom';

const News = ({ isTheme }) => {
    const [news, setNews] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [sordDate, setSortDate] = useState('')

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://next-admin-server-1.onrender.com/api/get-news');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    const filteredNews = news.filter((item) => {
        const newsDate = new Date(item.createdDate);


        let dateFilter;
        switch (sordDate) {
            case 'today':
                dateFilter = isToday(newsDate);
                break;
            case 'yesterday':
                dateFilter = isYesterday(newsDate);
                break;
            case 'week':
                dateFilter = isThisWeek(newsDate);
                break;
            case 'month':
                dateFilter = isThisMonth(newsDate);
                break;
            default:
                dateFilter = true;
        }


        const searchFilter = searchName
            ? item.name.toLowerCase().includes(searchName.toLowerCase())
            : true;

        return dateFilter && searchFilter;
    });

    return (
        <div className='w-full h-full  ' style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',
            padding: '5px',
        }}>
            <div className='w-full h-14 flex justify-between items-center page-header '>
                <button className='w-14 h-10 bg-black rounded-md '>
                    <Link to="/">
                        <p className='text-2xl text-white font-mono'>{`<`}</p>
                    </Link>

                </button>
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
                            <div className='w-12 h-12 bg-button rounded-md flex items-center justify-center relative right-8'>
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
                                    <div key={index} className='w-auto min-w-news-card h-1/6 rounded-xl flex flex-col items-center m-3 pt-2'>
                                        <div className='w-11/12 h-3/6 bg-slate-100 rounded-xl'>
                                            <img className='w-full h-full rounded-xl' src="https://thumbor.bigedition.com/canion-do-funil/1-XwGPkqu2z8sxyeILZgafef_jA=/480x360/filters:format(webp):quality(80)/granite-web-prod/98/71/987127fad40c48a0b66596b01565632f.jpeg" alt="" />
                                        </div>
                                        <div className='w-11/12 h-3/6 pl-2'>
                                            <div className=' w-full h-14 flex items-center justify-between'>
                                                <h2 className='text-3xl font-medium'>{item.name}</h2>
                                                <h2 className='text-lg text-gray-600 font-medium '>{item.createdDate}</h2>
                                            </div>
                                            <div className='w-full h-auto'>
                                                <p className='text-lg text-gray-400 font-medium'>{item.description}</p>
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
