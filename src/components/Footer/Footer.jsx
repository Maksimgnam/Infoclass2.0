import React from 'react'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full min-h-footer text-black bg-button flex flex-wrap items-center justify-around '>
            <div className='text-2xl font-mono pl-3'>infoClass</div>
            <div className='w-auto h-auto  flex flex-col   max-footer-card   '>
                <h3 className='text-xl font-mono'>Навігація</h3>
                <p className='text-md font-mono'>
                    <Link to="/">Головна</Link>
                </p>
                <p className='text-md font-mono'>
                    <Link to="/gallery">Галерея</Link>
                </p>
                <p className='text-md font-mono'>
                    <Link to="/news">Новини</Link>
                </p>

                <p className='text-md font-mono'>
                    <Link to="/lessons">Уроки</Link>
                </p>

            </div>
            <div className='w-auto h-auto  max-footer-card  '>
                <h3 className='text-xl font-mono'>Контакти</h3>
                <p className='text-lg font-mono'>
                    <span className=' text-sm font-bold'>Сайт:</span>    <a href="http://shkloschool.kl.com.ua/">shkola-shklo.com</a>

                </p>
                <p className='text-lg font-mono'>
                    <span className=' text-sm font-bold'>Gmail:</span>   shkolashklo1@gmail.com
                </p>
                <p className='text-lg font-mono'>
                    <span className='text-sm  font-bold'>Контакти:</span>  +380(98) 775 6565
                </p>



            </div>
            <div className='w-auto h-auto  max-footer-card '>
                <h3 className='text-lg font-mono'>Соц.мережі</h3>
                <div className='w-32 h-11  flex items-center justify-between'>
                    <a href="https://www.youtube.com/@user-io5gq1kv4d">
                        <img className='w-6 h-6' src="https://static.thenounproject.com/png/40254-200.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com/@user-io5gq1kv4d">
                        <img className='w-9 h-9' src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="" />
                    </a>

                    <a href="https://www.instagram.com/school_shklo/">

                        <img className='w-7 h-7' src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="" />
                    </a>



                </div>

            </div>

            <div className='w-auto h-auto  max-footer-card  '>
                <h3 className='text-xl font-mono'>Адреса</h3>
                <p className='text-lg font-mono'>Шкло</p>
                <p className='text-md font-mono'>Львівська область</p>
                <p className='text-md font-mono'>вул: Тараса Шевченка 1</p>
                <a href="https://www.google.com/maps/place/%D0%A1%D0%97%D0%9E%D0%A8+%D1%81%D0%BC%D1%82.%D0%A8%D0%BA%D0%BB%D0%BE/@49.9570383,23.5427557,17z/data=!3m1!4b1!4m6!3m5!1s0x473b3dbb45fa7973:0xe4ca5c0e575e91b7!8m2!3d49.9570349!4d23.5453306!16s%2Fg%2F11bbydnm5s?hl=uk-UK&entry=ttu">
                    <div className='flex items-center relative top-1 ' ><img className='w-5 h-5' src="https://i.pinimg.com/originals/8b/72/61/8b7261afc1179fd7b1212062f7deb4ea.jpg" alt="" /> <p className='text-lg font-mono relative left-2'>На мапі</p></div>
                </a>

            </div>
        </div >
    )
}

export default Footer