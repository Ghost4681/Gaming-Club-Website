import React from 'react'
import img1 from '../white-logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (    
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"black"}}>
        <img src={img1} alt="..." className='nav-img'/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>    
            <li className="nav-item active">
                <Link to="/events" className="nav-link">Events <span className="sr-only">(current)</span></Link>
            </li>  
            <li className="nav-item active">
                <Link to="/sponsors" className="nav-link">Sponsors <span className="sr-only">(current)</span></Link>
            </li>  
            <li className="nav-item active">
                <a className="nav-link" href="#">News <span className="sr-only">(current)</span></a>
            </li>  
            <li className="nav-item active">
                <a className="nav-link" href="#about">About Us <span className="sr-only">(current)</span></a>
            </li>  
            <li className="nav-item active">
                <Link to="/gallery" className="nav-link">Gallery <span className="sr-only">(current)</span></Link>
            </li>    
            </ul>
        </div>
    </nav>
  )
}

export default Navbar