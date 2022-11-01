import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function AllEvents() {

    const [cevents, setCevents] = useState([])
    const [uevents, setUevents] = useState([])

    useEffect(() => {
        ( async () => {
        axios.get("http://localhost:5000/getcevents")
        .then((res) => {
            console.log(res.data.cevents)                    
            setCevents(res.data.cevents)                    
        }).catch((err) => console.log(err))
        })();
    },[])
    useEffect(() => {
        ( async () => {
        axios.get("http://localhost:5000/getuevents")
        .then((res) => {
            console.log(res.data.uevents)
            setUevents(res.data.uevents)
        }).catch((err) => console.log(err))
        })();
    },[])

    const handledel = (id , e) =>{
        e.preventDefault();

        axios.delete("http://localhost:5000/deluevent/"+id)    
        .then((res) => {
            console.log(res.data)
            window.location.href="/all"
        })
    }
    const handledel2 = (id , e) =>{
        e.preventDefault();

        axios.delete("http://localhost:5000/delcevent/"+id)    
        .then((res) => {
            console.log(res.data)
            window.location.href="/all"
        })
    }

  return (
    <div className='container mt-3'>
        <h3>Upcoming Events</h3>
        {
            uevents.map((uevent, id) => {
                return (
                <div className="cardu mt-2 mb-2" key={id}>
                    <div className="imgcont mr-2">
                        <img src={uevent.poster} alt="..." className='carduimg'/>
                    </div>
                    <div className="contentx">
                        <p>{uevent.name}</p>
                        <p>{uevent.date}</p>
                        <p>{uevent.prize}</p>                                
                    </div>
                    <div className="btns">
                    <Link to={{
                            pathname:"uevent/"+uevent._id,   
                            eventid:uevent._id
                        }}>
                    <button className='btn btn-primary vmore'>View More</button>            
                    </Link>
                    <button className='btn btn-danger del' onClick={(e) => handledel(uevent._id, e)}>Delete Event</button>
                    </div>
                </div>   
            )
            })
        }
        <h3 className='mt-3'>Completed Events</h3>
        {
            cevents.map((cevent, id) => {
                return (
                <div className="cardu mt-2 mb-2" key={id}>
                    <div className="imgcont mr-2">
                        <img src={cevent.poster} alt="..." className='carduimg'/>
                    </div>
                    <div className="contentx">
                        <p>{cevent.name}</p>
                        <p>{cevent.date}</p>
                        <p>{cevent.prize}</p>                                
                    </div>
                    <div className="btns">
                    <Link to={{
                            pathname:"cevent/"+cevent._id,                               
                        }}>
                    <button className='btn btn-primary vmore'>View More</button>            
                    </Link>
                    <button className='btn btn-danger del' onClick={(e) => handledel2(cevent._id, e)}>Delete Event</button>
                    </div>
                </div>   
            )
            })
        }                
    </div>
  )
}

export default AllEvents