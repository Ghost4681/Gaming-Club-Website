import React from 'react'
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import images from './images'

function Gallery() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div>
            <div className='vh-100'></div>
            <div className='vh-100 relative bg-gray-300 bg-gradient-to-b from-violet-300 via-violet-500 to-gray-900'>
            <div style={{margin: '0 5%'}}>
                <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                    <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='inner-carousel'>
                        {images.map(image => {
                            return(
                                <motion.div className='item' key={image}>
                                    <img src={image} alt=""></img>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
            </div>
        </div>
    );
}

export default Gallery