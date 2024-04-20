import React from 'react';
import { Link } from 'react-router-dom';

import class1 from '../../../public/Images/class1.jpg';
import class2 from '../../../public/Images/class2.jpg'
import class3 from '../../../public/Images/class3.jpg'
import class4 from '../../../public/Images/class4.jpg'

const Home = ({ isTheme }) => {
    return (
        <div style={{ backgroundColor: isTheme ? '#333' : '#fff', color: isTheme ? 'white' : '#333', }} className='w-full h-auto   flex items-center justify-center '>
      
            <div className='w-11/12 max-w-home-card h-auto  flex flex-wrap justify-between '>
                <div className='w-auto min-w-home-text max-w-home-text  min-h-home-text '>
                    <div className='w-auto flex pt-6'>
                        <div className='w-10 h-10  rounded-md '>
                            <img src="https://cdn-icons-png.flaticon.com/512/5390/5390264.png" alt="" />
                        </div>
                        <h1 className='text-3xl font-medium relative left-3'>Клас інформатики №2 </h1>
                    </div>
                    <div className='w-auto h-auto min-h-home-text pt-2 '>
                        <p className='text-lg font-semibold text-gray-400'>Опис</p>
                        <p className='text-md font-medium text-gray-500'>
                        Клас інформатики - це місце, де учні отримують можливість поглиблено вивчати комп'ютерні науки та розвивати свої навички у цій сфері. У нашому класі створено сприятливу атмосферу для активного вивчення та експериментування. Заняття проходять як у формі лекцій, так і в практичній роботі за комп'ютерами. Учні знайомляться з основами програмування, роботи з операційними системами, мережами, веб-розробкою та іншими аспектами інформатики.

Наш клас обладнаний сучасною комп'ютерною технікою та програмним забезпеченням, що дозволяє кожному учневі максимально ефективно вивчати матеріал. Крім того, ми надаємо можливість учням брати участь у різноманітних проектах та змаганнях з інформатики, щоб розвивати їх творчий потенціал та сприяти формуванню навичок командної роботи.

Наша мета - не лише передавати знання, але й навчити учнів критично мислити, аналізувати і розв'язувати реальні проблеми за допомогою інформатики. Ми прагнемо підготувати наших учнів до успішної кар'єри в сфері технологій та зробити їх активними учасниками цифрового світу
                        </p>
                        <button className='w-48 h-16 bg-button  rounded-md mt-4 '>

                            <p className='text-2xl text-white font-semibold'>
                                <Link to="/news">Більше</Link> </p>

                        </button>


                    </div>



                </div>
                <div className='w-auto  min-w-home-images   max-w-home-images flex flex-wrap'>
                    {/* <div style={{ backgroundImage: `url('${class2}')` }} className='w-60 h-72 bg-slate-100 rounded-xl m-3 bg-cover home-images'>

                    </div>
                    <div style={{ backgroundImage: `url('${class3}')` }} className='w-72 h-72 bg-slate-100 rounded-xl m-3 bg-cover home-images'>

                    </div>


                    <div style={{ backgroundImage: `url('${class1}')` }} className='w-60 h-60 bg-slate-100 rounded-xl m-3 bg-cover home-images'>

                    </div>


                    <div style={{ backgroundImage: `url('${class4}')` }} className='w-72 h-60 bg-slate-100 rounded-xl m-3 bg-contain home-images'>
                        <img className='w-full h-full  rounded-xl' src={class4} alt="" />
                    </div> */}

                    <div className='w-60 h-60 bg-slate-100 rounded-xl m-3 home-images'>
                        <img className='w-full h-full  rounded-xl bg-cover' src={class2} alt="" />
                    </div>
                    <div className='w-60 h-52 bg-slate-100 rounded-xl m-3 home-images'>
                        <img className='w-full h-full  rounded-xl' src={class1} alt="" />
                    </div>
                    <div className='w-60 h-72 bg-slate-100 rounded-xl m-3  home-images'>
                        <img className='w-full h-full  rounded-xl' src={class3} alt="" />
                    </div>
                    <div className='w-60 h-72 bg-slate-100 rounded-xl m-3  home-images'>
                        <img className='w-full h-full  rounded-xl' src={class4} alt="" />
                    </div>

                </div>

            </div >
        </div >
    )
}

export default Home