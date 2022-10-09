import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gamepad from '../static/gamepad.png'
import people from '../static/people.png'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'


function Past_Event() {
    return (
        <div className='flex flex-col justify-center items-center justify-items-center content-center bg-gray-300'>
            <div className='w-full poster_cover'><div className='poster_contain'></div></div>
            <div className='w-3/4 h-24 -mt-21 stats-card z-20 rounded-3xl shadow-2xl drop-shadow-2xl flex flex-row justify-around content-around items-center'>
                <div>
                    <h1 className='text-gray-200 text-3xl uppercase'>minecraft</h1>
                </div>
                <div>
                    <h2 className='text-gray-300 text-lg'>4th September 2022 | 22:00 IST</h2>
                </div>
                <div className='flex flex-row space-x-6'>
                    <div className='flex flex-col space-y-0 items-center'>
                        <div className=' flex flex-row flex-nowrap space-x-2 mx-0.5 pb-1'>
                            <img src={gamepad} className='w-8 h-8'></img><p className='text-gray-50 text-md pt-0.5 mb-0'>5V5</p>
                        </div>
                        <div className='w-full h-0.5 bg-slate-50'></div>
                        <div><p className='text-gray-300 text-xs uppercase pt-1'>play mode</p></div>
                    </div>
                    <div className='flex flex-col space-y-0 items-center'>
                        <div className=' flex flex-row flex-nowrap space-x-2 mx-0.5 pb-2 -mt-1'>
                            <div className='w-8 h-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill='#ffffff'><path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" /></svg>
                            </div>
                            <p className='text-gray-50 text-md pt-1-5 mb-0'>PC</p>
                        </div>
                        <div className='w-full h-0.5 bg-slate-50'></div>
                        <div><p className='text-gray-300 text-xs uppercase pt-1'>platform</p></div>
                    </div>
                    <div className='flex flex-col space-y-0 items-center'>
                        <div className=' flex flex-row flex-nowrap space-x-2 mx-0.5 pb-1'>
                            <img src={people} className='w-8 h-8'></img><p className='text-gray-50 text-md pt-0.5 mb-0'>10</p>
                        </div>
                        <div className='w-full h-0.5 bg-slate-50'></div>
                        <div><p className='text-gray-300 text-xs uppercase pt-1'>teams</p></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Past_Event