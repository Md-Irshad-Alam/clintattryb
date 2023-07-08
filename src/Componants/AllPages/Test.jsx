import React from 'react'
import {toggletodealer} from '../Context/User'
function Test() {
    const toggle = ()=>{
        toggletodealer().then((responce)=>{
            console.log(responce.data.data)
        }).catch((error)=>{
            console.log("eror")
        })
    }
  return (
    <div>
      <button onClick={toggle}>clintt</button>
    </div>
  )
}

export default Test
