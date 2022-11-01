import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from './Loader';

function CEvent() {
  const { id } = useParams();
  const cevent = id
  const [event, setEvent] = useState([]);
  const [image, setImg] = useState('');
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const [iszero, setIszero] = useState(false)

  useEffect(() => {
    (async () => {
      axios
        .get(`http://localhost:5000/getcevent/${id}`)
        .then((res) => {
          console.log(res.data);
          setEvent(res.data);
          setLoading2(false)
        })
        .catch((err) => console.log(err));
    })();
    (async () => {
        axios
          .get(`http://localhost:5000/getimage/${id}`)
          .then((res) => {
            console.log(res.data.images);
            setImages(res.data.images);
            if(res.data.images.length === 0)
                setIszero(true)
            else
                setIszero(false)
            setLoading(false)
          })
          .catch((err) => console.log(err));
      })();
  }, []);
  

  const formSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/addimg/${id}`,{
        image,
        cevent
    })
    .then((res) => {
        if(res.status == 200){
            console.log(res.data) 
            window.location.href=`/all/cevent/${id}`
        }else{
            console.log(res.data)
        }         
    })
  }
  
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const uploadimg = async (e) =>{
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImg(base64)
  }

  const handledel = (i , e) =>{
    e.preventDefault();

    axios.delete("http://localhost:5000/delimg/"+i)    
    .then((res) => {
        console.log(res.data)
        window.location.href=`/all/cevent/${id}`
    })
}

  return (
    <>
    { loading || loading2 ? (<Loader />):(
      <div>
        <div className="container" style={{overfloX:'hidden'}}>
          <img src={event.poster} alt="Poster" className="poster mt-2" />
          <div className="cont-2">
            <div className="info">
              <p>Name - {event.name}</p>
              <p>Date - {event.date}</p>
              <p>Prize - {event.prize}</p>
              <p>First - {event.first}</p>
              <p>Second - {event.second}</p>
              <p>Third - {event.third}</p>
            </div>
            <div className="upload mt-2">
              <h5 className="text-center">Add Images</h5>
              <form onSubmit={(e) => formSubmit(e)} encType="multipart/form-data">
                <input type="file" required onChange={(e) => uploadimg(e)}/>
                <br />
                <button type="submit" className="btn btn-success mt-2">
                  Upload
                </button>
              </form>
            </div>
          </div>
          {iszero ? (<div className="text-center mt-3" style={{fontSize:'30px', fontWeight:'bold'}}>No Images</div>): (
            <div className="d-flex mt-3 mb-5" style={{flexWrap:'wrap',gap:'25px'}}>
                {
                    images.map((img, id) => {                    
                        return(
                        <div className="gallerydiv d-flex">
                            <img key={id} src={img.image} alt="" className="galleryimg"/>                        
                            <button className="btn btn-danger btndel" onClick={(e) => handledel(img._id,e)}>Delete</button>
                        </div>
                        )
                    })
                }                    
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
}

export default CEvent;

