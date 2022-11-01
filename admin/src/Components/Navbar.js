import React from 'react'
import img1 from '../images/white-logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <img src={img1} alt="LOGO" className='navimg'/>
            </Link>            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"> 
                    <Link to="/" className='linkx'>
                        <li className="nav-item active">
                            <p className="nav-link">Home <span className="sr-only">(current)</span></p>
                        </li>
                    </Link>
                    <Link to="/all" className='linkx'>
                        <li className="nav-item active">
                            <p className="nav-link">AllEvents <span className="sr-only">(current)</span></p>
                        </li>
                    </Link>                    
                </ul>    
            </div>
        </nav>
    </div>
  )
}

export default Navbar