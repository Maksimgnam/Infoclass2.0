import React from 'react'

const Motos = ({ isTheme }) => {
    return (
        <div style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',

        }} className='w-full h-auto  flex flex-col items-center justify-center p-5'>
            <h1 className='text-2xl font-mono'>Наші мото</h1>
            <div className='w-full h-auto flex flex-wrap items-center justify-center'>
                <div className='w-80 h-64 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <div className='w-full h-auto flex items-center justify-between  '>
                        <p className='text-2xl font-mono'>Клавіатура,Код</p>
                        <div className='w-11 h-11 bg-button rounded-lg flex items-center justify-center'>
                            <h3 className='text-2xl font-bold'>01</h3>
                        </div>

                    </div>

                    <p className='text-2xl font-medium pt-1'>"Клавіатура – наш пензель, а код – наша мова. Інформатика – мистецтво створення віртуального світу."</p>
                </div>
                <div className='w-80 h-64 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <div className='w-full h-auto flex items-center justify-between  '>
                        <p className='text-2xl font-mono'>Ключ до дії</p>
                        <div className='w-11 h-11 bg-button rounded-lg flex items-center justify-center'>
                            <h3 className='text-2xl font-bold'>02</h3>
                        </div>

                    </div>
                    <p className='text-2xl font-medium pt-1'>"Інформатика – ключ до розуміння сучасного світу, де думка і програма взаємодіють безмежно."</p>

                </div>
                <div className='w-80 h-64 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <div className='w-full h-auto flex items-center justify-between  '>
                        <p className='text-2xl font-mono'>У новому світі</p>
                        <div className='w-11 h-11 bg-button rounded-lg flex items-center justify-center'>
                            <h3 className='text-2xl font-bold'>03</h3>
                        </div>

                    </div>
                    <p className='text-xl font-medium pt-1'>"Всіляка діяльність у світі комп'ютерів вимагає розуміння мови програмування, де кожен символ та команда мають своє значення."</p>
                </div>
            </div>
        </div>
    )
}

export default Motos