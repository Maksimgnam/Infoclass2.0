// import React, { useEffect, useState, useMemo } from 'react'
// import galleryData from '../../../galleryData/galleryData.json'
// const Gallery = () => {
//     const [gallery, setGallery] = useState([]);
//     const [page, setPage] = useState(1)

//     useEffect(() => {
//         const fetchGallery = async () => {
//             try {
//                 const response = await fetch('https://next-admin-server-1.onrender.com/api/gallery');
//                 const data = await response.json();
//                 setGallery(data);


//             } catch (error) {
//                 console.log('Something wrong with gallery fetching', error)

//             }

//         }

//         fetchGallery();
//     })

//     let itemsPerPage = 1;

//     const pageChange = () => {

//     }
//     const generateRandomDimensions = () => ({
//         width: `${Math.floor(Math.random() * (350 - 200) + 200)}px`,
//         height: `${Math.floor(Math.random() * (350 - 150) + 150)}px`,
//     });
//     const initialCardDimensions = useMemo(
//         () => Array.from({ length: 10 }, generateRandomDimensions),
//         []
//     );
//     return (
//         <div className='w-full h-auto flex  flex-col justify-center items-center  pt-5'>
//             <h2 className='text-2xl font-mono'>Галерея</h2>
//             {
//                 galleryData.length > 0 ? (
//                     <div className='w-11/12 h-auto flex flex-wrap items-center  pt-5 '>
//                         {
//                             galleryData.map((item, index) => (
//                                 <div key={index} style={initialCardDimensions[index]} className='w-full h-full rounded-xl  flex items-center justify-center   m-5 mt-0 ml-0'>
//                                     <img className='w-full h-full rounded-xl ' src={`https://next-admin-server-1.onrender.com/uploads/${item.photo}`} alt="" />
//                                 </div>
//                             ))
//                         }





//                     </div>

//                 ) : (
//                     <div className='w-full h-loader text-3xl font-mono text-gray-500'>Під'єднання...</div>
//                 )
//             }

//         </div >
//     )
// }

// export default Gallery

import React, { useEffect, useState, useMemo } from 'react'
import galleryData from '../../../galleryData/galleryData.json';
import { Link } from 'react-router-dom';
const Gallery = () => {




    const generateRandomDimensions = () => ({
        width: `${Math.floor(Math.random() * (350 - 200) + 250)}px`,
        height: `${Math.floor(Math.random() * (350 - 150) + 200)}px`,
    });
    const initialCardDimensions = useMemo(
        () => Array.from({ length: 10 }, generateRandomDimensions),
        []
    );
    return (
        <div className='w-full h-full  flex  flex-col justify-center items-center   p-3'>

            <div className='w-full h-auto flex  items-center '>
                <button className='w-10 h-10 bg-black rounded-md '>
                    <Link to="/">
                        <p className='text-2xl text-white font-mono'>{`<`}</p>
                    </Link>

                </button>
                <div className='w-full h-10 flex items-center justify-center'>
                    <h2 className='text-2xl text-center font-mono'>Галерея</h2>
                </div>



            </div>
            {
                galleryData.length > 0 ? (
                    <div className='w-11/12 h-auto min-h-gallery flex flex-wrap items-center justify-center  pt-5 '>
                        {
                            galleryData.map((item, index) => (
                                <div key={index} style={initialCardDimensions[index]} className='w-full h-full rounded-xl  flex items-center justify-center   m-5 mt-0 ml-0'>
                                    <img className='w-full h-full rounded-xl ' src={item.image} alt="" />
                                </div>
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


