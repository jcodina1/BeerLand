import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from '../Context/Contestautenticacion';
import NavBar from "../NavBar/NavBar";
import style from "../UserProfile/UserProfile.module.css";
import { getUser } from '../../redux/actions';
import Footer from "../Footer/Footer";

export default function UserProfile() {
    const users = useSelector((state) => state.user)
    const { user } = useAuth();
    const dispatch = useDispatch()
    let currentUser;
    let name;
    useEffect(() => {
        dispatch(getUser());
    }, []);

    if (user !== null) {
        currentUser = users.filter((e) => e.email === user.email);
        name = currentUser[0].name + currentUser[0].surname
    }
    console.log(currentUser)



    return (
        <>
            <NavBar />
            {user ?
                <>
                    <div className={style.flor}>
                        <h1>Your profile</h1>
                        <div className={style.hola}>
                            <img src={currentUser[0].image} />
                            <div className={style.margen}>
                                <h3>Name: {currentUser[0].name}</h3>
                                <h3>Surname: {currentUser[0].surname}</h3>
                                <h3>E-mail: {currentUser[0].email}</h3>
                                <h3>Address: {currentUser[0].address}</h3>
                            </div>
                        </div>
                    </div>
                </> :
                <div>
                    <h2>You need to be logged in to access here</h2>
                </div>
            }
            <Footer/>
        </>
    )
}
