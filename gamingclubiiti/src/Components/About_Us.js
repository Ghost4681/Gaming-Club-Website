import React from 'react'
import logo from '../white-logo.png'
import line from '../static/line.png'
import video from '../static/sample.mp4'
import heart from '../static/heart.png'
import comments from '../static/comments.png'
import dm from '../static/dm.png'
import bookmark from '../static/bookmark.png'
import vandal from '../static/valorant_vandal.png'


function About_Us() {
    let url1 = "/about";
    return (
        <div>
            <div className="home-reverse">
                <div className='pt-36 z-10'>
                    <div className='flex flex-row justify-around h-full'>

                        {/* instagram card */}
                        <div className='flex flex-col w-96 h-196 bg-slate-900 pt-4 rounded-3xl shadow-2xl'>
                            <div className='flex flex-row justify-between w-full'>
                                <div className='pl-4 flex flex-row justify-start w-1/2'>
                                    <div className='w-1/4'><img className='w-16' src={logo}></img></div>
                                    <div className='w-3/4'><h2 className='text-lg text-slate-50'>GamingclubIITI</h2></div>
                                </div>
                                <div className='mr-4 w-24 h-8 bg-blue-500 rounded-lg items-center'><h2 className='text-slate-50 text-lg text-center'>Follow</h2></div>
                            </div>
                            <div className='pt-2'><img className='w-full' src={line}></img></div>
                            <div className='h-96 bg-black items-center pt-20'><video autoplay controls src={video}></video></div>
                            <div><img className='w-full' src={line}></img></div>

                            <div className='flex flex-row justify-between pt-2'>
                                <div className='flex flex-row justify-start pt-2 space-x-4 pl-4 w-full'>
                                    <div className='w-7 pt-1'>
                                        <img src={heart}></img>
                                    </div>
                                    <div className='w-8'>
                                        <img src={comments}></img>
                                    </div>
                                    <div className='w-7 pt-1'>
                                        <img src={dm}></img>
                                    </div>
                                </div>
                                <div className='w-9 pt-2 mr-4 justify-self-end'>
                                    <img src={bookmark}></img>
                                </div>
                            </div>
                            <div><p className='pt-2 ml-4 text-gray-500 uppercase text-sm'>september 18</p></div>
                        </div>
                        <div className='flex flex-col justify-end'>

                            <div className='flex flex-col w-96 text-right justify-end ml-36'>
                                <h2 className='text-gray-100 text-4xl uppercase'>about us</h2>
                                <p className='text-gray-300 text-lg'>We just turned <span className='text-red-400'>ONE</span> and yet have made more than <span className='text-red-400'>20</span> tournaments, and have donated more than <span className='text-red-400'>₹30,000</span> to the community as a small symbol of what we stand for and what we can do.</p>
                                <div className='flex-row w-full justify-center space-x-8 z-10'>

                                    <a href={url1}><button
                                        className=" bg-red-50 hover:bg-red-500 text-gray-800 hover:text-gray-50 font-bold rounded-full my-6 py-4 px-4 shadow-lg transition ease-in-out duration-500">Meet The Team</button></a>
                                </div>

                            </div>
                            <div className='z-0 ml-36 valo-bg w-full h-48'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_Us