import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, addAdress, updateUser, getUser, answerSupport } from '../../../redux/actions';
import { Formik, Form, Field } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useAuth } from '../../Context/Contestautenticacion';

export default function AdminAnswer({name, email, idSupport, isUser, userId}) {
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
    }

    const redirect = () => {
        history.push("/userProfile")
    }

    
  function post(values) {
    values.name = name
    values.email = email
    values.idSupport = idSupport
    values.isUser=isUser
    values.userId=userId

    dispatch(answerSupport(values))
    Swal.fire({
        title:'Done!',
        text:'Your answer was sent correctly',
        icon:'success',
        showConfirmButton: false,
        timer: 1500
})
  }


    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    answer:'',
                    idSupport: 0,
                    isUser:null,
                    userId:0
                }}
                validate={(valores) => {
                    let errors = {};
                    if (!valores.answer) {
                        errors.answer = "Please enter a answer";
                        Swal.fire({
                            title:'0ops..!',
                            text:'Your answer can not be empty',
                            icon:'error',
                            showConfirmButton: false,
                            timer: 1500})
                    }
                    if (/^\s/.test(valores.answer)) {
                        errors.answer = "Cant start with an empty space"
                    }
                    return errors;
                }}
                onSubmit={(valores, { resetForm }) => {
                    dispatch(post(valores, idUser))
                   
            window.location.reload(true)
            resetForm()
            setTimeout(() => redirect(), "1000")
        }}>
            {({ touched, errors }) => (
                <Form className="LoginForm">
                    <h5>Answer</h5>
                    <div className='fieldLog'>
                        <label>Comment: </label>
                        <Field name="answer" as="textarea" placeholder="Comment" />
                        {touched.answer && errors.answer && <span>{errors.answer}</span>}
                    </div>
                    <div className='fieldLog'>
                        <button>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
        </div >
  )
}
