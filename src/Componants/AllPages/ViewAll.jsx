import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../Context/context'
import  style from "./style.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function ViewAll() {
 
  let {data} =  useContext(AuthContext)

  let history  = useNavigate();
  const handledelete = (ele)=>{
    let id = ele.ele._id;
    console.log(id)

    axios.delete(`https://att-server.onrender.com/auth/${id}`)
      .then((response) => {
        console.log(response.data);
        toast("Record deleted from the databse ")
        history("/product")
      })
      .catch((error) => {
        console.log(error);
        toast("Faild to delete")

      });
   
  }


  return (
    <div className='main_view_container'>
      <table className='table'>
        <thead>

        <tr>
        <th>name</th>
        <th>image</th>
        <th>Mileage</th>
        <th>Price</th>
        <th>previous owners</th>
        <th>maintenance history</th>
        <th>accident history </th>
        <th>condition </th>
        <th>kms</th>
        <th>major scratches </th>
        <th>accidents reported </th>
        <th>original paint </th>
        <th>previous buyers </th>
        <th>registration place </th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
        </thead>

      {
        data.map((ele)=>{
            return(
              <tbody>
               
              
             <tr>
              <td>{ele.name}</td>
             <td>{ele.image}</td>
             <td>{ele.mileage}</td>
             <td>45000</td>
             <td>{ele.previous_owners}</td>
             <td>{ele.maintenance_history}</td>
             <td>{ele.accident_history}</td>
             <td>{ele.condition}</td>
             <td>{ele.kms_on_odometer}</td>
             <td>{ele.major_scratches}</td>
             <td>{ele.original_paint}</td>
             <td>{ele.accidents_reported}</td>
             <td>{ele.previous_buyers}</td>
             <td>{ele.registration_place}</td>
             <td>
             <Link to={`/item/${ele._id}`} >
             <button>update</button>
             </Link>
              </td>
             <td>
              <button onClick={()=> handledelete({ele})}>Delete</button>
              </td>
             </tr>
             
              </tbody>
            )
        })
      }
      </table>
    </div>
  )
}

export default ViewAll
