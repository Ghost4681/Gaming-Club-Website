import React from 'react'


function About(props) {
  return (
    <div className="home-reverse">
      <div className='pt-36'>
        <div className='flex flex-col items-start w-full'>
          <h1 className='uppercase px-24 pb-12 text-gray-300 text-5xl'>Meet the team</h1>
          <div className='container mx-auto my-auto flex flex-wrap flex-col items-center space-y-12'>
            <div className='flex flex-row items-center text-center space-x-12'>

              <div className='flex flex-col'>
                <ul className="potrait">
                  <li className='potrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>john carter</h2>
                  <p className='text-sm text-gray-300'>Head Of Gaming Club</p></li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <ul className="potrait2">
                <li className='potrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>Michael carn</h2>
                <p className='text-sm text-gray-300'>FPS Head</p></li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <ul className="potrait3">
                <li className='potrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>Gary scott</h2>
                <p className='text-sm text-gray-300'>Creative Head</p></li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row items-center text-center space-x-12'>

              <div className='flex flex-col'>
                <ul className="potrait3">
                <li className='potrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>Gary scott</h2>
                <p className='text-sm text-gray-300'>Creative Head</p></li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <ul className="potrait2">
                <li className='potrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>Michael carn</h2>
                <p className='text-sm text-gray-300'>FPS Head</p></li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <ul className="potrait">
                  <li className='potrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>john carter</h2>
                  <p className='text-sm text-gray-300'>Head Of Gaming Club</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About