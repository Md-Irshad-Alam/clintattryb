import React  from 'react'
import { useEffect, useState } from "react"
import  style from "./style.css"
import { toast } from 'react-toastify';
import { updateAPI } from '../Context/User';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Update_form() {
    const [image, setImage] = useState('');
    const [mileage, setMileage] = useState('');
    const [previous_owners, setPreviousOwners] = useState('');
    const [maintenance_history, setMaintenanceHistory] = useState('');
    const [accident_history, setAccidentHistory] = useState('');
    let history = useNavigate();
    const { id } = useParams();

    const handleInput = (event) => {
      event.preventDefault();
        if(!image && !mileage && !previous_owners){
            toast("please fill this form correctly ")
        }else{
            axios.put(`https://att-server.onrender.com/auth/${id}`,{
              image, mileage, previous_owners, maintenance_history, accident_history
            })
              .then((response) => {
                console.log(response.data);
                toast("Record added to the databse ")
                history("/product")
              })
              .catch((error) => {
                console.log(error);
                toast("Faild to add")
        
              });
          };
        }
   
  return (
    
    <div className='main_form-cont'>
      <form onSubmit={handleInput} className='form_cont'>
        <label htmlFor="Image" className='label'>
          Image:
          <input
            type="text"
            placeholder="Choose file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='input'
          />
        </label>
        <label htmlFor="" className='label'>
          Mileage:
          <input
            type="number"
            placeholder="Mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className='input'
          />
        </label>
        <label htmlFor="" className='label'>
          Previous Owner:
          <input
            type="number"
            placeholder="Previous Owner"
            value={previous_owners}
            onChange={(e) => setPreviousOwners(e.target.value)}
            className='input'
          />
        </label>
        <label htmlFor="" className='label'>
          Maintenance History:
          <input
            type="text"
            placeholder="Maintenance History"
            value={maintenance_history}
            onChange={(e) => setMaintenanceHistory(e.target.value)}
            className='input'
          />
        </label>
        <label htmlFor="" className='label'>
          Accident History:
          <input
            type="text"
            placeholder="Accident History"
            value={accident_history}
            onChange={(e) => setAccidentHistory(e.target.value)}
            className='input'
          />
        </label>
        <input type="submit" value="Submit" className='input-buton' />
      </form>
    </div>
    
  )
}

export default Update_form
