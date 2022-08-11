import { React } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import NavBar from "../NavBar/NavBar";
import ShowBeers from "../ShowBeers/ShowBeers";
import style from "../Home/Home.module.css";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
/* import PromoBanner from "../PromoPage/PromoPage"; */
import Slider from "../Slider/Slider";
import { Container } from "@mui/material";

export default function Home() {
  
  /* const [userType, setUserType] = useState('') */
  const carga = useSelector(state => state)


  return (
    <Container maxWidth='xxl' disableGutters='false'>
      <div className={style.navbar}>
      <div><NavBar /></div>
      <div><Slider /></div>
      <div className={style.h1Tittle}>Our Products</div>  
      <div className={style.homeContainer}>
       
        <div >
          <div className={style.beerBox}><ShowBeers /></div>
        </div>

      </div>
      <div className={style.footer}>
        
      </div>
    </div>
    <Footer className={style.footer} />
    </Container>


  );
}
