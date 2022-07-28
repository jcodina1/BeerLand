import { React } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import NavBar from "../NavBar/NavBar";
import ShowBeers from "../ShowBeers/ShowBeers";
import style from "../Home/Home.module.css";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  /* const [userType, setUserType] = useState('') */
  const carga = useSelector(state => state)

  return (
    <div className={style.homeContainer}>
      <div>
        <NavBar />
      </div>
      <div >
        <div className={style.beerBox}><ShowBeers /></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
