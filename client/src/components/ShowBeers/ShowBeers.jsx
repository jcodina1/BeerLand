import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBeers } from '../../redux/actions';
import style from '../ShowBeers/ShowBeers.module.css'
import Loading from "../Loading/Loading";
import BeerCard from "../BeerCard/BeerCard";
import Pagination from "../Pagination/Pagination";

export default function ShowBeers() {
    const dispatch = useDispatch();
    const allBeers = useSelector(state => state.allBeers);
    const allBeers1 = useSelector(state => state.search);
    const styles = useSelector(state => state.styles);
    const [currentPage, setCurrentPage] = useState(1);
    const [beerPerPage, setBeerPerPage] = useState(10);
    const lastBeer = currentPage * beerPerPage;
    const firstBeer = lastBeer - beerPerPage;
    const currentBeer = allBeers.slice(firstBeer, lastBeer);
    const page = (pageNumber) => { setCurrentPage(pageNumber) };
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!allBeers1.length) {
      dispatch(getAllBeers());
    }
  }, [dispatch]);
  
  return (
    <div className={style.showBeers}>
      <div className={style.cardsContainer}>
        <div className={style.cardsBox}>
                    {allBeers.length === 0 ? <span>(<Loading setLoading={setLoading}/>)</span> : currentBeer?.map(beer => {
                        return (
                            <BeerCard
                                id={beer.id}
                                key={beer.id}
                                name={beer.name}
                                description={beer.description}
                                image={beer.image}
                            // style={beer.style}
                            // origin={beer.origin}
                            />
                        )
                    })}
                    <Pagination beerPerPage={beerPerPage} allBeers={allBeers} currentBeer={currentBeer} page={page} />
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
