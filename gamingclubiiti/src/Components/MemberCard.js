import React from 'react'

function Member_Card(props) {

    const {Imglink, BwImg, Name, Post} = props;

  return (
        <div className='flex flex-col'>
            <ul className="portrait" style={{ '--image' : `url('${BwImg}')`, '--hover-image' : `url('${Imglink}')` }}>
                <li className='portrait_name mr-8'><h2 className='uppercase text-slate-300 text-md leading-3 pt-3'>{Name}</h2>
                <p className='text-sm text-gray-300'>{Post}</p></li>
            </ul>
        </div>
  );
}

export default Member_Card