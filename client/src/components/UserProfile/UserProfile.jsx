import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../Context/Contestautenticacion";
import NavBar from "../NavBar/NavBar";
import style from "../UserProfile/UserProfile.module.css";
import { getUser } from "../../redux/actions";
import { FaUserEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";
import EditProfile from "../EditProfile/EditProfile";
import { useModals } from "../../Hooks/useModals";

import Footer from "../Footer/Footer";
import UserPurchases from "../Purchases/UserPurchases/UserPurchases";

export default function UserProfile() {
  const users = useSelector((state) => state.user);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [mostrarOrden, setMostrarOrden] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModals(false);
  let image;

  let currentUser;
  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (user !== null) {
    currentUser = users.filter((e) => e.email === user.email);
    image = currentUser[0].image;
  }

  return (
    <>
      <NavBar />
      {currentUser ? (
        <>
          <div className={style.flor}>
            <h1>Your profile</h1>
            <div className={style.hola}>
              <img src={image} />
              <div className={style.margen}>
                <h3>Name: {currentUser[0].name}</h3>
                <h3>Surname: {currentUser[0].surname}</h3>
                <h3>E-mail: {currentUser[0].email}</h3>
              </div>
            </div>
            <button
              className="buttonSeting"
              onClick={openModal}
              title="Edit Profile"
            >
              <FaUserEdit color="#c03b3b" size={25} />
              <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <EditProfile />
              </Modal>
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2>You need to be logged in to access here</h2>
        </div>
      )}
      <Footer />
    </>
  );
}
