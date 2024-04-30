import React from 'react'

const Documents = ({ isTheme }) => {
    return (
        <div style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

        }} className='w-full h-auto bg-green-600 flex flex-col items-center justify-center p-6'>
            <h2 className='text-2xl font-mono'>Нормативні документи</h2>
            <iframe src="/urok1.pdf" frameborder="0" height={800} className='mt-5 w-8/12 pdf  '></iframe>
        </div>
    )
}

export default Documents