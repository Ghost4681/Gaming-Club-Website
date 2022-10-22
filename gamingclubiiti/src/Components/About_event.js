import React from 'react'
import img1 from '../static/potrait_test.jpg'
import img2 from '../static/potrait_test_2.jpg'
import img3 from '../static/potrait_test_3.jpg'

function About_event() {
  return (
    <div className='vh-100 bg-gray-300 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600'>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full my-16 text-6xl text-bold text-slate-700 text-center'><h2 className='underline decoration-red-500 decoration-4 underline-offset-8'>Results</h2></div>
            <div className='flex flex-row justify-items-center content-end'>
              <div><img className='results_winner' src={img1}></img></div>
              <div><img className='results_winner' src={img2}></img></div>
              <div><img className='results_winner' src={img3}></img></div>
            </div>
            <div><p></p></div>
        </div>
    </div>
  );
}

export default About_event