import React from 'react';
import { useEffect } from 'react';
import galleryData from '../../../galleryData/galleryData.json';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Photos = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
  return (
    <>
          
    {
        galleryData.length > 0 ? (
            <div className='w-11/12 h-auto  min-h-gallery flex flex-wrap items-center justify-center  pt-5 p-5 '>
                {
                    galleryData.map((item) => (
                        <Link  to={`/image/${item.id}`}>
                        <div  key={item.id} data-aos="fade-up"   className='w-96 h-96  bg-cover  flex items-center justify-center   m-8 mt-0  mr-2'>
                            <img className='w-full h-full rounded-2xl ' src={item.image} alt="" />
                        </div>
                        </Link>
                        
                    ))
                }





            </div>

        ) : (
            <div className='w-full h-loader text-3xl font-mono text-gray-500'>Під'єднання...</div>
        )
    }
      </>
  )
}

export default Photos