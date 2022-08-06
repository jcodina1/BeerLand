import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, addAdress, updateUser, getUser } from '../../redux/actions';
import { Formik, Form, Field } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import Swal from "sweetalert2";


import './style.css'
import { useAuth } from '../Context/Contestautenticacion';
export default function Register() {
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector(state => state.user)
    const { user } = useAuth()
    let currentUser;
    let idUser;


    useEffect(() => {
        dispatch(getUser());
    }, []);

    console.log(users)
    if (user !== null) {
        currentUser = users.filter((e) => e.email === user.email);
        idUser = currentUser[0].id
        console.log(currentUser)
    }

    const redirect = () => {
        history.push("/userProfile")
    }

    const data ={
        name: "Marlonupdate",
        surname: "Guzmánupdate",
        address: "cale x #y-zupdate",
        email: "marlonguzman2997@gmail.com",
        image: "https://lh3.googleusercontent.com/a-/AFdZuco4XKOPwGthDdLbkLMhpWIEGlQ26Q52NHuii9y6_Q=s96-c"
    }

    function Despachar() {
        dispatch(updateUser(data,1))
    }


    return (
        <div>
            <Formik
                initialValues={{
                    name: currentUser.name,
                    surname: currentUser.surname,
                    image: currentUser.image
                }}
                validate={(valores) => {
                    let errors = {};
                    if (/^\s/.test(valores.name)) {
                        errors.name = "Cant start with an empty space"
                    }
                    if (/^\s/.test(valores.surname)) {
                        errors.surname = "Cant start with an empty space"
                    }
                    return errors;
                }}
                onSubmit={(valores, { resetForm }) => {
                    dispatch(updateUser(valores, idUser))
                    Swal.fire({
                        title:'Done!',
                        text:'Your profile has been updated',
                        icon:'success',
                        showConfirmButton: false,
                        timer: 1500
            })
            window.location.reload(true)
            resetForm()
            setTimeout(() => redirect(), "1000")
        }}>
            {({ touched, errors }) => (
                <Form className="LoginForm">
                    <h1>Modify your profile</h1>
                    <div className='fieldLog' >
                        <label>Name: </label>
                        <Field type="text" name="name" placeholder="Name" />
                        {touched.name && errors.name && <span>{errors.name}</span>}
                    </div>
                    <div className='fieldLog'>
                        <label>Last name: </label>
                        <Field type="text" name="surname" placeholder="surname" />
                        {touched.surname && errors.surname && <span>{errors.surname}</span>}
                    </div>
                    <div className='fieldLog'>
                        <label>Profile picture: </label>
                        <Field type="text" name="image" placeholder="Profile picture" />
                    </div>
                    <div className='fieldLog'>
                        <button type="submit">Modify</button>
                    </div>
                </Form>
            )}
        </Formik>
        </div >
  )
}

