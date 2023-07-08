import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../Context/context'
import  style from "./style.css";
function ViewAll() {
  // "image":"hello.png",
  // "mileage": "50000",
  // "previous_owners": 2,
  // "maintenance_history": "Regularly serviced",
  // "accident_history": "No accidents",
  // "condition": "Good",
  // "kms_on_odometer": 75000,
  // "major_scratches": false,
  // "original_paint": true,
  // "accidents_reported": 0,
  // "previous_buyers": 1,
  // "registration_place": "New York"

    let {data} =  useContext(AuthContext)
    console.log(data)
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
             <td><button>update</button></td>
             <td><button>Delete</button></td>
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
