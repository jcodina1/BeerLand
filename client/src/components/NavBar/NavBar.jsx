import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import BeerLogo from "../../img/BeerLogo.png";
import { useAuth } from "../Context/Contestautenticacion";
import Cart from "../Cart/Cart";
import { useModals } from "../../Hooks/useModals";
import Modal from "../Modal/Modal.jsx"
import { Login } from "../Login/login2"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import Swal from "sweetalert2";
import { IoIosBeer, IoMdContact } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md"
import { useDispatch } from "react-redux";
import { removeAllFromCart, getUser } from "../../redux/actions";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';


export default function NavBar({ setPage, id }) {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user)
  const { salir, user } = useAuth();
  const [cart, setCart] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModals(false);

  const [sideBar, setSideBar] = useState(true);
  const showSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    dispatch(getUser());
}, []);

  let currentUser;
  if (user !== null) {
    currentUser = users.filter((e) => e.email === user.email);
}




  const clearCart = async () => {
    dispatch(removeAllFromCart())
  };

  useEffect(() => {
    user ? setIsLogged(true) : setIsLogged(false);
  }, [user, isLogged]);

  function handleLogOut() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Log out",
        text: "Do You Want To Log Out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Log out",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setIsLogged(false);
          salir();
          reload();
          clearCart();
          window.location.href = "/home";
        }
      });
  }
  function reload() {
    window.location.reload(true);
  }



  // const handleLogOut = async () => {
  //   await salir();
  //   setIsLogged(false)
  // };

  return (
    <Container maxWidth='false' disableGutters='false'>
      <nav className={style.navbar}>
      <div>
        <Link to="/home">
          <span>
            <img
              className={style.logo}
              id="BeerLogo"
              src={BeerLogo}
              alt="Beer"
            />
          </span>
        </Link>
      </div>
      <div className={style.space}>
        <SearchBar setPage={setPage} />
      </div>

        
      <div className={style.infoDistribution}>

        <div className={style.buttonlink}>
          <div className={style.cartbtn}>
          <Link to="/promoPage">
              <AiTwotoneHome className={style.icon} style={{fill:'#dfdfdf', marginRight:'5px',marginLeft:'5px' }} />
            </Link>
            <Link to="/home">
              <IoIosBeer className={style.icon} style={{fill:'#dfdfdf', marginRight:'5px',marginLeft:'5px' }} />
            </Link>
            <Link to="/cart">
              {/* <button className={style.cartBtn}></button> */}
              <MdShoppingCart className={style.icon} style={{ fill: '#dfdfdf' , marginRight:'5px',marginLeft:'5px' }} />
            </Link>
          </div>
          <div className={style.space2}>
          { !currentUser?.length ? '' :
            <h4 style={{marginTop:'10px'}}>Hello, {currentUser[0].name} </h4>
          }
          
        </div>
          {!isLogged && (
            <div className={style.log}>
              <IoMdContact className={style.icon} onClick={openModal} />
              <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <Login />
              </Modal>
            </div>
          )}

          {isLogged && (
            <div className={style.sideBar}>
              <IoMdContact
                onClick={showSideBar}
                style={{ cursor: "pointer", marginTop:'5px' }}
                color={"rgb(209,56,0)"}
                className={style.icon}
              />
              <ProSidebar
                className={style.sidePosition}
                collapsed={sideBar}
                width={210}
                collapsedWidth={"0px"}
                onClick={showSideBar}
              >
                <Menu iconShape="square">
                  <MenuItem icon={<CgProfile />}>
                    Your Profile
                    <Link to="/userProfile" />
                  </MenuItem>

                  <MenuItem icon={<BsFillBookmarkHeartFill />}>
                    Liked
                    <Link to="/user/favourites" />
                  </MenuItem>

                  <MenuItem icon={<FaShoppingBag />}>
                    Shopping History
                    <Link to={`/history`} />
                  </MenuItem>

                  <MenuItem icon={<CgLogOut />} onClick={handleLogOut}>
                    LogOut

                  </MenuItem>


                </Menu>
              </ProSidebar>
            </div>
          )}

        </div>
      </div>
    </nav>
    </Container>
  );
}
