import React from 'react'

function Member_Card(props) {

    const { Imglink, BwImg, Name, Post, Insta } = props;


    return (
        <div className='flex flex-col'>
            <a href={Insta} target="_blank" title='Click to open their profile'>
                <button>
                    <ul className="portrait rounded-lg" style={{ '--image': `url('${BwImg}')`, '--hover-image': `url('${Imglink}')` }}>
                        <li className='portrait_name mr-8 rounded-b-lg'><h2 className='uppercase text-slate-300 text-smd leading-3 pt-3'>{Name}</h2>
                            <p className='text-sm text-gray-300 capitalize'>{Post}</p></li>
                    </ul>
                </button>
            </a>

        </div>
    );
}

export default Member_Card