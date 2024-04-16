import React from 'react';
import { useState, useEffect } from 'react';

const Rules = ({ isTheme }) => {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://next-admin-server-1.onrender.com/api/rules');
                const data = await response.json();
                setRules(data)

            }
            catch (error) {
                console.log('something wrong with news')


            }
        }


        fetchNews()

    }, []);
    return (
        <div style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

        }} className=' w-full h-auto flex flex-col items-center  pt-10 pb-2   '>
            <h3 className='text-2xl font-mono '>Правила</h3>

            <div className='w-11/12 h-5/6 flex flex-wrap justify-center relative bottom-1 pt-4  '>
                {
                    rules.map((item, index) => (
                        <div key={index} className='w-80 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                            <p className='text-lg font-medium'>{item.title}</p>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default Rules