import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 7) + "..." : str;
      }
    

  return (
    <div>
        <div className="container">
        <Link to="all" className='linkx'>
            <div className="card2 mt-2">
                <p className='cardtxt'>All Events</p>
            </div>
        </Link>
        <Link to="createu" className='linkx'>
            <div className="card2 mt-2">
                <p className='cardtxt'>Create Upcoming Event</p>
            </div>
        </Link>
        <Link to="createc" className='linkx'>
            <div className="card2 mt-2">
                <p className='cardtxt'>Create Completed Event</p>
            </div>
        </Link>        
        </div>
    </div>
  )
}

export default Home