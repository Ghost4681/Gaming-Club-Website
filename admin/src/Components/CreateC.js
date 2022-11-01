import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CreateC() {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [prize, setPrize] = useState('');
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [poster, setPoster] = useState('');
       
    const formSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/cevent",{
            name,
            date,
            prize,
            first,
            second,
            third,
            poster,
        })
        .then((res) => {
            if(res.status == 200){
                console.log(res.data) 
                window.location.href="/"
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
        setPoster(base64)
      }

  return (
    <div className='container-2 mt-3'>   
        <h3 align="center">Create Completed Event</h3>
        <form onSubmit={(e) => formSubmit(e)} encType='multipart/form-data'>
            <div className="form-group">
                <label>Name</label>
                <input required type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>                
            </div>  
            <div className="form-group">
                <label>Date</label>
                <input required type="text" className="form-control" onChange={(e) => setDate(e.target.value)}/>                
            </div>  
            <div className="form-group">
                <label>Prize</label>
                <input required type="text" className="form-control" onChange={(e) => setPrize(e.target.value)}/>                
            </div>  
            <div className="form-group">
                <label>First</label>
                <input requiredtype="text" className="form-control" onChange={(e) => setFirst(e.target.value)}/>                
            </div>  
            <div className="form-group">
                <label>Second</label>
                <input required type="text" className="form-control" onChange={(e) => setSecond(e.target.value)}/>                
            </div>                          
            <div className="form-group">
                <label>Third</label>
                <input required type="text" className="form-control" onChange={(e) => setThird(e.target.value)}/>                
            </div>                      
            <label>Poster</label>
            <br/>
            <input required type="file" onChange={(e) => uploadimg(e)}/>
            <br/>
            <button type='submit' className='btn btn-primary mt-3 mb-3'>Create</button>    
        </form>          
    </div>
  )
}

export default CreateC