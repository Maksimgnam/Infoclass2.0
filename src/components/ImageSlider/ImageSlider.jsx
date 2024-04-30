// import React from 'react'
// import galleryData from '../../../galleryData/galleryData.json';
// const ImageSlider = () => {
//   return (
//     <div>ImageSlider</div>
//   )
// }

// export default ImageSlider
import React, { useState, useEffect } from 'react';
import galleryData from '../../../galleryData/galleryData.json';
import { Link, useParams } from 'react-router-dom';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideProgress, setSlideProgress] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryData.length - 1 ? 1 : prevIndex + 1));
    setSlideProgress(0)
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 12000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setSlideProgress((prevProgress) => prevProgress + 1);
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="w-full h-full  flex flex-col justify-between items-center p-10 pt-7 sm:p-7">
    <div className='w-full h-auto flex justify-end'>
        <Link to={`/gallery`}>
          <button className='w-10 h-5  rounded-full relative bottom-4 left-2 sm:bottom-0 '>
            <p className='text-2xl font-medium'>X</p>
          </button>
        </Link>
      </div>
      <img className='w-full sm:w-5/12 sm:h-slider-image h-image rounded-lg' src={galleryData[currentIndex].image}  />
        <div className="w-full sm:w-5/12 h-7  rounded-lg m-2.5 flex items-center justify-center">
        <div
          className="h-full w-  sm:w-5/12 bg-green-300 rounded-xl"
          style={{ width: `${(slideProgress / 50) * 50}%` }}
        ></div>
      </div>
      <div className='w-full  sm:w-10/12 h-auto  flex items-center justify-center relative top-2  '>


        <button onClick={nextSlide} className='w-11 h-9 bg-black rounded'>
            <p className='text-lg text-white font-mono '>  {`<`} </p>
        </button>
        <div className='w-14 h-9 flex items-center justify-center'>
            
            <p className='text-xl font-mono'> {currentIndex}</p>
       
  
           
            </div>
        <button onClick={nextSlide} className='w-11 h-9 bg-black rounded'>
            <p className='text-lg text-white font-mono '>  {`>`} </p>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
