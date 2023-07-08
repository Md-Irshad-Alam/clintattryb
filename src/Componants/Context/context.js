import React, { useContext, useEffect, useState } from 'react'
import {getLoggedInUser, loginApi, ome_spec_API} from './User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export function AuthContextProvider({children}) {
    let history = useNavigate();

    const [islogin, setShowLoginForm] = useState(false);
    const [user, setuser] = useState("")
    const [data, seetdata] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            setShowLoginForm(true);
        }
      }, []);

    function login(email, password) {
        loginApi(email, password)
        .then(response => {
       
             const token = response.data.token;
             localStorage.setItem('auth-token', token);
             setShowLoginForm(true);
             window.location.reload();
             
        })
        .catch(err => {
            window.alert("Login faild")
        })
    }

    function logout() {
        localStorage.removeItem('auth-token');
        toast("You loged Out")
        window.location.reload();
    }


    useEffect(() => {
        ome_spec_API().then((responce)=>{
           
            seetdata(responce.data)
        }).catch((error)=>{
            console.log(error.ERROR);
        })
        getLoggedInUser()
        .then(response => {
            const user = response.data;
            setuser(user.data)
        })
    }, [islogin])

    return <AuthContext.Provider value={{
        user, 
        islogin, setShowLoginForm, data,
        login, logout
    }}>
        {children}
    </AuthContext.Provider>
}
const AuthContext = React.createContext({
    
})
export default AuthContext;