import React from 'react'
import img1 from '../../static/potrait_test.jpg'
import img2 from '../../static/potrait_test_2.jpg'
import img3 from '../../static/potrait_test_3.jpg'
import podium from '../../static/podium.png'
import line from '../../static/line.png'

function About_event() {
  return (
    <div className='vh-150 bg-gray-300 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 confetti'>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>

      <div className='flex flex-col justify-center items-center'>
        <div className='w-full mb-16 text-6xl text-bold text-slate-700 text-center'><h2 className='underline decoration-red-500 decoration-4 underline-offset-8'>Results</h2></div>
        <div className='flex flex-row justify-ceontent-center justify-items-center content-end space-x-12 items-end'>
          <div><img className='results_runner float-5' src={img1}></img></div>
          <div className='pb-12'><img className='results_winner float-5 delay-2' src={img2}></img></div>
          <div><img className='results_runner float-5' src={img3}></img></div>
        </div>
        <div className='podium'><img src={podium}></img></div>
        <div className='flex flex-row justify-center space-x-12'>
          <div className='flex flex-col items-center pt-8'><div><h2 className='text-slate-100 text-3xl'>2nd</h2></div><div className='width-18 items-center justify-center justify-self-center'><h2 className='text-slate-100 text-2xl uppercase w-full text-center'>Sarvesh Aware</h2></div></div>
          <div className='flex flex-col items-center'><div><h2 className='text-slate-50 text-5xl'>1st</h2></div><div className='width-18 items-center justify-center justify-self-center'><h2 className='text-slate-50 text-3xl uppercase w-full text-center'>R. Harsh</h2></div></div>
          <div className='flex flex-col items-center pt-8'><div><h2 className='text-slate-200 text-3xl'>3rd</h2></div><div className='width-18 items-center justify-center justify-self-center'><h2 className='text-slate-200 text-2xl uppercase w-full text-center'>Sarthak Nandre</h2></div></div>
        </div>
        <div className='podium pt-4'><img src={line}></img></div>
      </div>
    </div>
  );
}

export default About_event