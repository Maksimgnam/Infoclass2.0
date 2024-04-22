import React from 'react';
import galleryData from '../../../galleryData/galleryData.json';
import { Link, useParams } from 'react-router-dom';

const Image = ({isTheme}) => {

  const {id} = useParams();
  const item = galleryData.find((item)=> item.id === parseInt(id))
  return (
    <div className='w-full h-full sm:p-11 p-7  flex flex-col sm:justify-center items-center justify-start'>
      <div className='w-full h-auto flex justify-end'>
        <Link to={`/gallery`}>
          <button className='w-10 h-10  rounded-full relative bottom-4 left-2 sm:bottom-0 '>
            <p className='text-2xl font-medium'>X</p>
          </button>
        </Link>
      </div>
      <img src={item.image} className='w-full sm:w-10/12 sm:h-full h-image rounded-xl' alt="" />

    </div>
  )
}

export default Image