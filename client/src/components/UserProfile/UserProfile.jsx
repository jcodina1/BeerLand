import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../Context/Contestautenticacion";
import NavBar from "../NavBar/NavBar";
import "./style.css"
import { getUser } from "../../redux/actions";
import { FaUserEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";
import EditProfile from "../EditProfile/EditProfile";
import { useModals } from "../../Hooks/useModals";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import UserPurchases from "../Purchases/UserPurchases/UserPurchases";

export default function UserProfile() {
  const users = useSelector((state) => state.user);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [mostrarOrden, setMostrarOrden] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModals(false);

  let imageDefault = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
  useEffect(() => {
    dispatch(getUser());
  }, []);


  if (user !== null && users.length !== 0) {
    var currentUser = users.filter((e) => e.email === user.email);
  }
  
return (
  <>
      <NavBar />
      {user && currentUser.length?
      <div className='allProfile'>
        <div className='profile'>

          <img referrerPolicy="no-referrer" src={currentUser[0].image} />
          {/* <form>
            <input type="file" onChange={handleImage} name="file" id="" />
          </form> */}

          <h1>Name: {currentUser[0].name} {currentUser[0].surname}</h1>
          <h2>{currentUser[0].email}</h2>
        </div>

        <div className='settingsUser'>
        {mostrarOrden===true?<><button onClick={()=>setMostrarOrden(false)}>x</button><UserPurchases/></>:<button onClick={()=>setMostrarOrden(true)}>Ver Tus ordenes</button>}

          <button className='buttonSeting' onClick={openModal} title="Edit Profile" >
            <FaUserEdit color="#c03b3b" size={25} />
          </button>
          <button className='buttonSeting' onClick={openModal} title="Edit Profile" >
            <FaUserEdit color="#c03b3b" size={25} />
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <EditProfile />
            </Modal>
          </button>



          {/* <button onClick={handleClick} className='buttonSeting' >
            <MdOutlinePassword color="#c03b3b" title="Change Password" size={25} />
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <EditProfile />

            </Modal>

          </button> */}

        </div>


       
      </div>:
      <div  className="aviso">
      <h2>You need to be logged in to access here</h2>
      <Link to={`/home`}>
      <button className='minimize'>Back home</button>
      </Link>
      </div>}
    </>

  )
}
