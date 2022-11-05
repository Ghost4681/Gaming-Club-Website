import React from 'react';
import imag from '../static/potrait_test.jpg';

function Gallery() {

  const Images = [
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
    { imageUrl: imag},
  ];

  return (
    <div className='gallery-container'>
      <h1 className='uppercase px-24 pb-12 text-gray-300 text-5xl'>Gallery</h1>
      <div className='grid-wrapper'>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
        <div>
          <img className='gallery-image' src={imag} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Gallery