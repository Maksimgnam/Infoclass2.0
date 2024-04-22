import React from 'react';
import rulesData from '../../../rulesData/rulesData.json';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Rules = ({ isTheme }) => {


    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

        }} className=' w-full h-auto flex flex-col items-center  pt-10 pb-2   '>
            <h3 data-aos="fade-up" className='text-2xl font-mono'>Правила</h3>

            <div data-aos="fade-up" className='w-11/12 h-5/6 flex flex-wrap justify-center relative bottom-1 pt-4  '>
                {
                    rulesData.map((item, index) => (
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