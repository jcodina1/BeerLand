import React, { useReducer, useState } from "react";
import { useAuth } from "../Context/Contestautenticacion";
import { useHistory } from "react-router-dom";
import style from '../Login/Login.module.css'
import swal from 'sweetalert'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postSeller } from "../../redux/actions";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"
import { app } from "../../firebase";
import googleLogo from '../../img/googleLogin.png'


export default function RegisterSeller() {
    
    const dispatch = useDispatch()
    
    const firestore = getFirestore(app)
    const {signup, logingWithGoogle} = useAuth()
    const history = useHistory()
    const [error,setError] = useState('')

    const [user, SetUser] = useState({
        name:'',
        description:'',
        dni:'',
        mail:'',
        password: '',
        confirmation:'',
        rol:'admin'
    })
    console.log(user)

    const handleChange = (e) => {
        SetUser({
            ...user,
            [e.target.name]: e.target.value
            
        })
        console.log(e.target.value)
    }

    const handleGoogle = async ()=>{
        try {              
           const google =  await logingWithGoogle().then((usuarioGoogle)=>{
             return usuarioGoogle
           })
           console.log(google)
           const user2 = {
             mail:google.user.email,
             name:google._tokenResponse.firstName,
             surname:google._tokenResponse.lastName,
             description:'',
             dni:0,
             rol:'admin'
           }
           console.log(user2)
           const docuRef= doc(firestore, `usuarios/${google.user.uid}`)
           setDoc(docuRef, {email:user2.mail, name:user2.name,surname:user2.surname, user:user2.rol, login:'google'})
           dispatch(postSeller(user2))
           history.push('/home')
          } catch (error) {
              console.log(error.message)
              setError(error.message)
              swal(error.message)
          }
      
     }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           
            if (user.password === user.confirmation){
            await signup(user.mail, user.password, user.rol)
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
            type="number" 
            placeholder='youremail@company.com' 
            onChange={handleChange} />
     </div>
        
        <div className={style.password}>
            <label>Email: </label>
            <input 
            name='mail' 
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
                <div>
                    <Link to='/registerCompany'>
                        <span>
                            <img className={style.googleIcon} id='GoogleLogo' src={googleLogo} onClick={handleGoogle} alt='Beer' />
                        </span>
                    </Link>
                </div>
                

            <button className={style.password} onClick={handleSubmit}>Register</button>
        </form>
        <Link to='/home'>
                <button>Return</button>
            </Link>

    </div>
    )

}