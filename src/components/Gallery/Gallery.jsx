

import React, { useEffect, useState} from 'react'
import galleryData from '../../../galleryData/galleryData.json';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Photos from './Photos';
import Videos from './Videos';


const Gallery = ({isTheme}) => {

    const [selected, setSelected] = useState('photos');
    const renderGallery = () => {
        switch (selected) {
            case 'photos':
                return  <Photos/>
            case 'videos':
                return  <Videos/> 
          






            default:
                return  <Photos/>
        }
    }

  

    // const generateRandomDimensions = () => ({
    //     width: `${Math.floor(Math.random() * (350 - 200) + 250)}px`,
    //     height: `${Math.floor(Math.random() * (350 - 150) + 200)}px`,
    // });
    // const initialCardDimensions = useMemo(
    //     () => Array.from({ length: 10 }, generateRandomDimensions),
    //     []
    // );
    return (
        <div style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

        }} className='w-full   flex  flex-col justify-center items-center   pt-4 p-3'>

            <div className='w-full h-auto flex  items-center justify-between '>
                <div className='w-auto h-10'>
                <button className='w-9 h-9 bg-black rounded-md '>
                    <Link to="/">
                        <p className='text-xl text-white font-mono'>{`<`}</p>
                    </Link>

                </button>

                </div>
               
                <div className='w-auto h-10 flex items-center justify-end'>
                    <h2 className='text-2xl text-center font-mono pl-4   md:pl-52'>Галерея</h2>
                </div>

                <div className='w-auto h-10  flex  '>

                <div className='w-56 h-10 flex justify-between mr-4 gallery-buttons '>
                <button onClick={()=> setSelected('photos')} className='w-24 h-9 bg-black rounded  '>
                    <p className='text-md text-white font-mono'>Фото</p>
                </button>
                <button onClick={()=> setSelected('videos')} className='w-24 h-9 bg-black rounded '>
                    <p className='text-md text-white font-mono'>Відео</p>
                </button>
                <div className='w-auto h-full flex items-center'>
                    <div className='w-1 h-7 bg-slate-400 rounded-sm  mb-1'></div>
                </div>
               
                </div>
                <button className='w-24 h-9 bg-black rounded-md '>
                    <Link to="/allImages">
                        <p className='text-lg text-white font-mono'>Play</p>
                    </Link>

                </button>
              

                </div>



            </div>
            <div className='w-full h-10  flex items-center justify-center mt-2  gallery-down-buttons  '>
                <div className='w-52 h-auto flex justify-between'>
                <button onClick={()=> setSelected('photos')} className='w-24 h-9 bg-black rounded  '>
                    <p className='text-md text-white font-mono'>Фото</p>
                </button>
                <button onClick={()=> setSelected('videos')} className='w-24 h-9 bg-black rounded '>
                    <p className='text-md text-white font-mono'>Відео</p>
                </button>
                </div>
            </div>
            {renderGallery()}
          

        </div >
    )
}

export default Gallery


