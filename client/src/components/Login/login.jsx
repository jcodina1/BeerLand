import React, { useReducer, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useHistory } from "react-router-dom";
import style from '../Login/Login.module.css'
import swal from 'sweetalert'

export default function Login() {

    const {login, logingWithGoogle,resetPassword} = useAuth()
    
    const history = useHistory()
    const [error,setError] = useState('')

    const [user, SetUser] = useState({
        email:'',
        password: ''
    })

    const handleChange = (e) => {
        SetUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        try {
            await login(user.email, user.password)
            history.push('/home')  
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            swal(error.message)
        }
    }


    const handleGoogle = async ()=>{
       try {
         await  logingWithGoogle()
         history.push('/home')
         } catch (error) {
             console.log(error.message)
             setError(error.message)
             swal(error.message)
         }
     
    }

    const handelResetPassword =async ()=>{
        if (!user.email) return swal("please enter your mail")
        try {
            await resetPassword(user.email)
            swal('We sent you an mail with a link to reset you password')
        } catch (error) {
            setError(error.message)
        }
        
    }


    return (
        <div className={style.container}>
            <form>
                <h1>Login</h1>
            <div className={style.password}>
                <label>Email: </label>
                <input name='email'
                    type="email"
                    placeholder='youremail@company.com'
                    onChange={handleChange} />
            </div>

            <div className={style.password}>
                <label>Password: </label>
                <input name='password'
                    type='password' id="password"
                    placeholder='******'
                    onChange={handleChange} />
            </div>
            <div className={style.submit}>
                <button onClick={handleSubmit} >Login</button>
            </div>
            <a href='#!'
            onClick={handelResetPassword}
            >
                Forgot Password
            </a>
                
            </form>

            <label>Don't have an Account</label>
            <Link to='/register'>
                <button>Register</button>
            </Link>
            <div>
                <button onClick={handleGoogle}>Google Login</button>
            </div>
            <Link to='/home'>
                <button>Volver</button>
            </Link>
            
        </div>
    )

}