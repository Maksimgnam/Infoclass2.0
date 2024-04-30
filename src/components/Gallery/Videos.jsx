import React from 'react';
import { useEffect } from 'react';
import videosData from '../../../videosData/videosData.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Videos = () => {
  return (
   <>
    <div className='w-11/12 h-auto   flex flex-wrap pt-3 ' >
        {
            videosData.map((item)=>(
               
                   
                 
                    <iframe key={item.id} className='w-96 h-96 rounded-md shadow-sm m-3'  src={item.video}  controls title="YouTube video player" frameborder="0" allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
              
            ))
        }
        </div>
    </>
  )
}

export default Videos