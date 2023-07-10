import { toast } from "react-toastify";
import axios from "./index";

export async function loginApi(email, password) {
  return axios.post("/auth/login", {
    email,
    password,
  })
}

export async function registerApi(name, email, password) {
  return axios.post("/auth/register", {
    name,
    email,
    password,
  }).then((responce)=>{
    toast( `Registrations successfully completed  `)
  }).catch((error)=>{
    toast("opps Registration faild ")
  })
}

export async function getLoggedInUser() {
  return axios.get(`/auth/getuser`);
}
export async function toggletodealer() {
  return axios.put(`/auth/dealer`).then((responce)=>{
    toast("Congrate now are verified dealer ")
  }).catch((error)=>{
    toast("Opps faild to make dealer")
  })
}

export async function market_invetryAPI(
  image,
  mileage,
  previous_owners,
  maintenance_history,
  accident_history,
  condition,
  major_scratches,
  original_paint,
  kms_on_odometer,
  accidents_reported,
  previous_buyers,
  registration_place) {

    
  return axios.post(`/auth/create`,{
      image,
      mileage,
      previous_owners,
      maintenance_history,
      accident_history,
      condition,
      major_scratches,
      original_paint,
      kms_on_odometer,
      accidents_reported,
      previous_buyers,
      registration_place
  })
}


export async function ome_spec_API (){
  return axios.get("/auth/getAll")
}



