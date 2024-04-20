import React from 'react';
import { useState } from 'react';


import teacher from '../../../public/Images/teacher.jpg';
import teacher2 from '../../../public/Images/teacher2.jpg';

const Teachers = ({ isTheme }) => {

    return (
        <div style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

        }} className='w-full h-auto flex flex-col  items-center p-5 '>
            <h3 className='text-2xl font-mono'>Вчителі</h3>
            <div className='w-full h-auto   rounded-md flex items-center justify-center  '>
                <div className='w-auto  h-full   rounded-xl pl-2 flex flex-wrap  items-center justify-center '>

                    <div className='w-80 h-full m-8 mt-0 flex flex-col  justify-center items-center rounded-md  pt-4 pb-5 p-3   '>

                        <img className='w-80 h-96 rounded-md size-cover  border-emerald-900 ' src={teacher} alt="" />


                        <div className='w-full h-auto  flex items-center  justify-center pt-5'>
                            <div className='w-10/12 h-24 flex flex-col items-center justify-between '>

                                <h2 className='w-9/12 h-8 bg-button rounded-lg text-xl text-black  font-mono  flex items-center justify-center'>Галина Чікель</h2>


                                <div className='w-28  h-auto   rounded-md  flex items-center justify-between '>


                                    <div className='w-11 h-11 rounded-lg bg-button shadow-2xl flex items-center justify-center'>
                                        <img className='w-7 h-7 ' src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="" />

                                    </div>
                                    <div className='w-11 h-11 rounded-lg bg-button shadow-2xl flex items-center justify-center'>
                                        <img className='w-7 h-7 ' src="https://www.svgrepo.com/show/353162/instagram-with-circle.svg" alt="" />
                                    </div>
                                 
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='w-80 h-full m-8 mt-0 flex flex-col  justify-center items-center rounded-md  pt-4 pb-5 p-3   '>

                        <img className='w-full h-96 rounded-md size-cover  border-emerald-900 ' src={teacher2} alt="" />


                        <div className='w-full h-auto  flex items-center  justify-center pt-5'>
                            <div className='w-10/12 h-24 flex flex-col items-center justify-between '>

                                <h2 className='w-9/12 h-8 bg-button rounded-lg text-xl text-black  font-mono  flex items-center justify-center'>Віталій Гимон</h2>


                                <div className='w-28  h-auto   rounded-md  flex items-center justify-between '>


                                    <div className='w-11 h-11 rounded-lg bg-button shadow-2xl flex items-center justify-center'>
                                        <img className='w-7 h-7 ' src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="" />

                                    </div>
                                    <a href="https://www.instagram.com/iamvitalik/">


                                    <div className='w-11 h-11 rounded-lg bg-button shadow-2xl flex items-center justify-center'>
                                        <img className='w-7 h-7 ' src="https://www.svgrepo.com/show/353162/instagram-with-circle.svg" alt="" />
                                    </div>
                                    </a>
                                  
                                </div>
                            </div>
                        </div>



                    </div>



                </div>




            </div>

        </div>

    )
}

export default Teachers