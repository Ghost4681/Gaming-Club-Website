import React from 'react';
import Masony from "react-masonry-component";
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
    <div>
      <h1 className='uppercase px-24 pb-12 text-gray-300 text-5xl'>Gallery</h1>
      <div className='flex container-gallery' style={{'flex-wrap': 'wrap'}}>
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
        <img className='gallery-img' src={imag} alt='' />
      </div>
    </div>
  );
}

export default Gallery