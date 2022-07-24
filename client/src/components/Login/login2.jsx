import React from "react";
import { useState } from "react";
import style from '../Login/Login.module.css'
import swal from 'sweetalert'
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/contestautenticacion";


export function Login() {

    const history = useHistory()
    const {login} = useAuth()

    const [error,setError] = useState('')
    const [user, SetUser] = useState({
                email:'',
                password: '',
                User:'user'
               
            })
             console.log(user)
        
        //     function verifica_seleccion(check){
        //         if(!check.checked){
        //             check.checked=1;
        //         }
        //     }
        
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
        
        
        //     const handleGoogle = async ()=>{
        //        try {
        //         user.User = user.User
        //           const google =  await  logingWithGoogle()
        //           console.log(google)
        //           const userdata ={ name:google._tokenResponse.firstName, surname:google._tokenResponse.lastName,  email:google.user.email,  user:user.User}
        //           dispatch(postUser(userdata))
        //           history.push('/home')
        
        //          } catch (error) {
        //              console.log(error.message)
        //              setError(error.message)
        //              swal(error.message)
        //          }
             
        //     }
        
        //     const handelResetPassword =async ()=>{
        //         if (!user.email) return swal("please enter your mail")
        //         try {
        //             await resetPassword(user.email)
        //             swal('We sent you an mail with a link to reset you password')
        //         } catch (error) {
        //             setError(error.message)
        //         }
                
        //     }






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

            

         {/* <a href='#!'onClick={handelResetPassword}>
                Forgot Password
            </a> */}

            </form>
            <div className={style.submit}>
                <button onClick={handleSubmit} >Login</button>
            </div>
            {/* <div>
                <button onClick={handleGoogle}>Google Login</button>
            </div> */}
<div>
            <label>Don't have an Account  . </label>
            <Link to='/register'>
                <button>Register</button>
            </Link>
</div>
            <label>Register as a company : </label>
            <Link to='/registerCompany'>
                <button>Register</button>
            </Link>
           <div>
             <Link to='/home'>
                <button>Return</button>
            </Link>
           </div>
           
            
        </div>
    )
    
}