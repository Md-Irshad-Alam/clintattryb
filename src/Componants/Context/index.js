
import Axios from 'axios'


const url = "https://att-server.onrender.com"
// const url = "http://localhost:8080"

const axios = Axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    },
})

axios.interceptors.request.use(function (config) {

    // Do something before request is sent
    const token = localStorage.getItem('auth-token')
   
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
   

    return config;
  }, function (error) {

    // Do something with request error
    return Promise.reject(error);
});


export default axios;