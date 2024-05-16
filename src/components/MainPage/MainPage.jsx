// import React from 'react'
// import Header from '../Header/Header';
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import News from '../News/News';
// import Lessons from '../Lessons/Lessons';
// import Gallery from '../Gallery/Gallery';

// const MainPage = () => {

//     const [isTheme, setIsTheme] = useState(false);
//     const themeChange = () => {
//         setIsTheme((prevTheme) => !prevTheme)
//     }
//     return (
//         <div>


//             <BrowserRouter>

//                 <div className='w-full h-full'>
//                     <Header />
//                     <Routes>
//                         <Route path="/" element={
//                             <div className='w-full h-pages bg-green-200'></div>
//                         } excist />



//                     </Routes>

//                 </div>
//                 <div>


//                     <Routes>

//                         <Route path="/news" element={<News isTheme={isTheme} />} />
//                         <Route path="/gallery" element={<Gallery />} />
//                         <Route path="/lessons" element={<Lessons isTheme={isTheme} />} />

//                     </Routes>
//                 </div>
//             </BrowserRouter>
//         </div>
//     )
// }


// export default MainPage
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gallery from '../Gallery/Gallery';
import News from '../News/News';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Motos from '../Motos/Motos';
import Rules from '../Rules/Rules';
import Footer from '../Footer/Footer';
import Teachers from '../Teachers/Teachers';
import NavigationPage from '../NavigationPage/NavigationPage';
import Documents from '../Documents/Documents';
import Image from '../Image/Image';
import ImageSlider from '../ImageSlider/ImageSlider';


const Main = () => {

    const [isTheme, setIsTheme] = useState(false);
    const themeChange = () => {
        setIsTheme((prevTheme) => !prevTheme)
    }
    return (


        <BrowserRouter>

            <div className='w-full h-full' style={{
                backgroundColor: isTheme ? '#333' : '#fff',
                color: isTheme ? 'white' : '#333',

            }}>


                <Routes>
                    <Route path="/" element={
                        <>
                            <Header isTheme={isTheme} themeChange={themeChange} />
                            <div className='w-full h-full '>
                                <Home isTheme={isTheme} />

                                <Motos isTheme={isTheme} />
                                <Rules isTheme={isTheme} />
                                <Teachers isTheme={isTheme} />
                                <Documents isTheme={isTheme} />
                                <Footer />


                            </div>
                        </>

                    } excist />
                    <Route path="/news" element={<News isTheme={isTheme} />} />
                    <Route path="/gallery" element={<Gallery isTheme={isTheme} />} />
                    <Route path="/navigation" element={<NavigationPage isTheme={isTheme} />} />
                    <Route path="/image/:id" element={<Image  />} />
                    <Route path="/allImages" element={<ImageSlider/>} />

                </Routes>

            </div >

        </BrowserRouter >




    )
}

export default Main