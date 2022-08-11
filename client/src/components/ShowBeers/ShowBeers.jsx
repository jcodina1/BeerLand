import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeers, getAllSellers } from "../../redux/actions";
import style from "../ShowBeers/ShowBeers.module.css";
import Loading from "../Loading/Loading";
import BeerCard from "../BeerCard/BeerCard";
import Pagination from "../Pagination/Pagination";
import { setPage } from "../../redux/actions";
import SortByName from "./components/SortByName";
import FilterByBrewery from "./components/FilterByBrewery";
import FilterByType from "./components/FilterByType";
import SortByPrice from "./components/SortByPrice";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';


export default function ShowBeers() {
  const dispatch = useDispatch();
  const allBeers = useSelector((state) => state.beers);
  const allBeers1 = useSelector((state) => state.search);
  const styles = useSelector((state) => state.styles);
  let page = useSelector((state) => state.page);
  const [, setOrder] = useState("");
  const beersPerPage = 12;

  let lastIndex = page * beersPerPage; //indice incial para metodo slice
  let firstIndex = lastIndex - beersPerPage; //indice final para metodo slice
  let currentBeer = allBeers.slice(firstIndex, lastIndex); //metodo slice para determinar del array los libros a mostrar por pagina

  const limitPage = Math.ceil(allBeers.length / beersPerPage);

  let firstPrevControl = false; //control de botones, deshabilita cuando es imposible la ejecución
  let nextLastControl = false;

  if (page === 1) firstPrevControl = true; //control de botones, dependiendo la posición, deshabilita el correspondiente
  if (page === limitPage) nextLastControl = true;

  // pageControl realiza el control del paginado, recibe la información del evento y renderiza mediante el componente Paginated.
  // setea las páginas segun el botón clickeado.


  const paginate = (e, pageNumber) => {
    if (pageNumber === "next" && page + 1 <= limitPage) {
      dispatch(setPage(page + 1));
    } else if (pageNumber === "prev" && page - 1 >= 1) {
      dispatch(setPage(page - 1));
    } else {
      dispatch(setPage(pageNumber));
    }
  };
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!allBeers1.length) {
      dispatch(getAllBeers());
      dispatch(getAllSellers());
    }
  }, []);

  return (
    <Container maxWidth='xxl' disableGutters='false'>
      <div className={style.showBeers} >
        <div className={style.distance}>
          <div className={style.filters}>
            <div className={style.distribution}>
              <SortByName setOrder={setOrder} />
            </div>
            <div className={style.distribution}>
              <FilterByBrewery />
            </div>
            <div className={style.distribution}>
              <SortByPrice setOrder={setOrder} />
            </div>
            <div className={style.distribution}>
              <FilterByType />
            </div>
            <div className={style.buttonB}>
              <Link className={style.buttonB} to="/sellers" >BREWERIES</Link>
            </div>
          </div>
        </div>
        <div className={style.cardsContainer} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div className={style.cardsBox}>
            {allBeers.length === 0 ? (

              <Loading className={style.loading} setLoading={setLoading} />

            ) : (
              <>
                {currentBeer?.map((beer) => {
                  return (
                    <BeerCard
                      id={beer.id}
                      key={beer.id}
                      name={beer.name}
                      price={beer.price}
                      image={beer.image ? beer.image : false}
                      stock={beer.stock}
                    // style={beer.style}
                    // origin={beer.origin}
                    />
                  );
                })}

              </>
            )}
          </div>
          <Pagination
            page={page}
            paginate={paginate}
            limitPage={limitPage}
            firstPrevControl={firstPrevControl}
            nextLastControl={nextLastControl}
          />
        </div>
      </div>
    </Container>
  );
}

// const paginat = (e, pageNumber) => {
//     if (pageNumber === "next" && page + 1 <= limitPage) {
//         dispatch(setPage(page + 1))
//     } else if (pageNumber === "prev" && page - 1 >= 1) {
//         dispatch(setPage(page - 1))
//     } else {
//         dispatch(setPage(pageNumber))
//     }
// }
