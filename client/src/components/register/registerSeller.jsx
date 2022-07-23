import React, { useReducer, useState } from "react";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router-dom";
import style from '../Login/Login.module.css'
import swal from 'sweetalert'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postSeller  } from "../../redux/actions";


export default function RegisterSeller() {

    const dispatch = useDispatch()

    const {signup} = useAuth()
    const history = useHistory()
    const [error,setError] = useState('')

    const [user, SetUser] = useState({
        name:'',
        description:'',
        dni:'',
        mail:'',
        password: '',
        confirmation:'',
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
            dispatch(postSeller(user))
            console.log(user, 'holaaa')
            history.push('/home')
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
            <label>description: </label>
            <input name='description' 
            type="description" 
            placeholder='youremail@company.com' 
            onChange={handleChange} />
     </div>


     <div className={style.password}>
            <label>dni: </label>
            <input name='dni' 
            type="dni" 
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