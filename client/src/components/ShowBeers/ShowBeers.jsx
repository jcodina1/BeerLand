import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBeers } from '../../redux/actions';
import style from '../ShowBeers/ShowBeers.module.css'

import BeerCard from '../BeerCard/BeerCard'
import Pagination from '../Pagination/Pagination'

export default function ShowBeers() {
    const dispatch = useDispatch();
    const birras = useSelector(state => state.allBeers);
    console.log(birras)
    const styles = useSelector(state => state.styles);
    const [currentPage, setCuerrentPage] = useState(1);
    const [beerPerPage, setBeerPerPage] = useState(10);
    const lastBeer = currentPage * beerPerPage;
    const firstBeer = lastBeer - beerPerPage;
    const currentBeer = birras.slice(firstBeer, lastBeer);
    const page = (pageNumber) => { setCuerrentPage(pageNumber) };

    useEffect(() => {
        dispatch(getAllBeers())
    }, [dispatch])

    return (
        <div className={style.showBeers}>
            <div className={style.cardsContainer}>
                <div className={style.cardsBox}>
                    {currentBeer && currentBeer.map(beer => {
                        return (
                            <BeerCard
                                key={beer.id}
                                name={beer.name}
                                description={beer.description}
                                image={beer.image ? beer.image : <img alt='https://us.123rf.com/450wm/tawhy/tawhy1712/tawhy171202174/92419321-botella-rota-aislada-sobre-fondo-blanco.jpg?ver=6' />}
                            // style={beer.style}
                            // origin={beer.origin}
                            />
                        )
                    })}
                    <Pagination beerPerPage={beerPerPage} birras={birras} currentBeer={currentBeer} page={page} />
                </div>
            </div>
        </div>
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