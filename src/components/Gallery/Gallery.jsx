

import React, { useEffect} from 'react'
import galleryData from '../../../galleryData/galleryData.json';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = ({isTheme}) => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

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

        }} className='w-full   flex  flex-col justify-center items-center   p-3'>

            <div className='w-full h-auto flex  items-center '>
                <div className='w-auto h-10'>
                <button className='w-9 h-9 bg-black rounded-md '>
                    <Link to="/">
                        <p className='text-xl text-white font-mono'>{`<`}</p>
                    </Link>

                </button>

                </div>
               
                <div className='w-full h-10 flex items-center justify-center'>
                    <h2 className='text-2xl text-center font-mono'>Галерея</h2>
                </div>



            </div>
            {
                galleryData.length > 0 ? (
                    <div className='w-11/12 h-auto  min-h-gallery flex flex-wrap items-center justify-center  pt-5 '>
                        {
                            galleryData.map((item) => (
                                <Link  to={`/image/${item.id}`}>
                                <div  key={item.id} data-aos="fade-up"  className='w-96 h-80   flex items-center justify-center   m-8 mt-0  mr-0'>
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

        </div >
    )
}

export default Gallery


