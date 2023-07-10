import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthContext from '../Context/context'
import { AuthenticationForm, HeaderMegaMenu, NotFoundImage, } from '../Combine'
import Update_form from '../AllPages/Update_form'
import Test from '../AllPages/Test'
import { ContainedInputs } from '../AllPages/AddDetails'
import  ViewAll  from '../AllPages/ViewAll'
function AllRouter() {
  const {islogin} =  useContext(AuthContext)
  console.log(islogin)
  return (
    <>
     <HeaderMegaMenu/>
     
        <Routes>
           {
            islogin==false ? (
              <Route path='/login' element={<AuthenticationForm/>} />
            ):(
            
              <>
              
              <Route path='/dealer' element={<ContainedInputs/>}/>
              <Route path="/product" element={<ViewAll/>}/>
              <Route path="/item/:id" element={<Update_form/>}/>
              
              <Route path="*" element={<NotFoundImage/>}/>


              </>
             
            )
           }
        </Routes>
    </>
  )
}

export default AllRouter
