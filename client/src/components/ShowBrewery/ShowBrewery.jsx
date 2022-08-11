import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSellers } from "../../redux/actions";
import { setPage } from "../../redux/actions";
import BreweryCard from "../BreweryCard/BreweryCard";
import Loading from "../Loading/Loading";
import NavBar2 from "../NavBar/NavBar2";
import Pagination from "../Pagination/Pagination";
import style from '../ShowBrewery/ShowBrewery.module.css'
import Container from '@mui/material/Container';







export default function ShowBrewery() {
    const dispatch = useDispatch();
    const allSellers = useSelector((state) => state.allSellers);
    let page = useSelector((state) => state.page);
    const [, setOrder] = useState("");
    const sellerPerPage = 12;

    let lastIndex = page * sellerPerPage; //indice incial para metodo slice
    let firstIndex = lastIndex - sellerPerPage; //indice final para metodo slice
    let currentSeller = allSellers.slice(firstIndex, lastIndex); //metodo slice para determinar del array los libros a mostrar por pagina

    const limitPage = Math.ceil(allSellers.length / sellerPerPage);

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

        dispatch(getAllSellers());


    }, [dispatch]);

    return (
        <Container maxWidth='xxl' disableGutters='false'>
            <div>
                <NavBar2 />
                <div className={style.showBrewery}>

                    <div className={style.cardsContainer}>

                        <div className={style.cardsBox}>
                            {allSellers.length === 0 ? (
                                <span>
                                    (<Loading setLoading={setLoading} />)
                                </span>
                            ) : (
                                <>
                                    {currentSeller?.map((beer) => {
                                        return (
                                            <BreweryCard
                                                id={beer.id}
                                                key={beer.id}
                                                name={beer.name}
                                                image={beer.image ? beer.image : false}
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
            </div>
        </Container>
    )
}