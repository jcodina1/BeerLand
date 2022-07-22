import React, { useReducer, useState } from "react";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router-dom";
import style from '../Login/Login.module.css'
import swal from 'sweetalert'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUser  } from "../../redux/actions";


export default function Register() {

    const dispatch = useDispatch()

    const {signup} = useAuth()
    const history = useHistory()
    const [error,setError] = useState('')

    const [user, SetUser] = useState({
        email:'',
        password: '',
        confirmation:'',
        name:'',
        surname:'',
        address:''
    })

    const handleChange = (e) => {
        SetUser({
            ...user,
            [e.target.name]: e.target.value
            
        })
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           
            if (user.password === user.confirmation){
            await signup(user.email, user.password)
            dispatch(postUser(user))
            console.log(user, 'holaaa')
            //history.push('/home')
            }else{
                swal('Passwords do not match')
            }
           
           
            
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            swal(error.message)
        }
    }
    return (
    <div className={style.container}>
        <form>
        <h1>Sign In</h1>
        <div className={style.password}>
            <label>Name: </label>
            <input name='name' 
            type="name" 
            placeholder='youremail@company.com' 
            onChange={handleChange} />
     </div>

     <div className={style.password}>
            <label>Surname: </label>
            <input name='surname' 
            type="surname" 
            placeholder='youremail@company.com' 
            onChange={handleChange} />
     </div>


     <div className={style.password}>
            <label>Address: </label>
            <input name='address' 
            type="address" 
            placeholder='youremail@company.com' 
            onChange={handleChange} />
     </div>
        
        <div className={style.password}>
            <label>Email: </label>
            <input 
            name='email' 
            type="email" 
            placeholder='youremail@company.com' 
            onChange={handleChange} />
     </div>

     <div className={style.password}>
            <label>Password: </label>
            <input name='password' 
            type='password' id="password" 
            placeholder='password' 
            onChange={handleChange} />
    </div>

    <div className={style.password}>
             <label>Confirmation: </label>
            <input name='confirmation' 
            type='password' id="confirmation" 
            placeholder='confirmation' 
            onChange={handleChange} />
    </div>

            <button className={style.password} onClick={handleSubmit} >Register</button>
        </form>
        <Link to='/home'>
                <button>Return</button>
            </Link>

    </div>
    )

}