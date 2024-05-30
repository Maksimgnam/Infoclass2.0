import React from 'react';
import materials from '../../materialData/materialData.json';
import { Link } from 'react-router-dom';

const Materials = () => {
  return (
    <div className='w-full min-h-svh p-4 '>
        <div className='w-full h-10  flex items-center  justify-start  sm:justify-between'>
            <Link to="/">
                    <button className='w-8 h-8 bg-black rounded text-sm font-sans text-white '>
                        {`<`}
                    </button>
            </Link>
            <div className='w-auto h-auto flex items-center'>

                <p className='text-xl font-medium pl-3'>Матеріали до уроків</p>
            </div>
            <div></div>
        </div>
        <div className='w-auto h-auto flex flex-wrap sm:items-center mt-7'>
            {materials.map((item)=>(
                <div key={item.id} className='w-72 h-52 border-green-200 border-2 rounded flex flex-col items-center justify-between  p-3 m-4 '>
                    <div className='w-full h-auto'>
                    <button className='w-8 h-8 bg-black rounded text-sm font-sans text-white '>
                        {item.id}
                    </button>
                    </div>
                    <p className='text-xl font-medium'>{item.name}</p>
                    <a className='w-full' href={item.doc} download={item.doc}>
                    <button className='w-full h-12 bg-black rounded'>
                        <p className='text-lg text-white font-medium'>Завантажити</p>
                    </button>
                    </a>
                </div>
            ))}
         
        </div>
    </div>
  )
}

export default Materials