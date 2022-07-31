/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBeersByBrewery, getAllBeers, getBreweryDetail } from "../../redux/actions/index";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import style from './BreweryDetail.module.css'
import NavBar from "../NavBar/NavBar";
import ShowBeers from "../ShowBeers/ShowBeers";
import BeerCard from "../BeerCard/BeerCard";


export default function BreweryDetail() {
   const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const brewery = useSelector((state) => state.breweryDetail);
  const allBeers = useSelector((state) => state.beers);

  useEffect(() => {
    dispatch(getAllBeers()).then(res => dispatch(getBreweryDetail(id)))
      .then(res => dispatch(filterBeersByBrewery(id)))

  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={style.detailPage}>
        {brewery.length === 0 ? (
          <div>
            (<Loading setLoading={setLoading} />)
          </div>
        ) : (
          <div>
            <div>
              <Link to="/sellers">
                <button className={style.button}>Back</button>
              </Link>

            </div>
            <div className={style.box}>
              <div className={style.leftContainer}>
                <div>
                  <h1>{brewery.name}</h1>
                </div>
                <div>
                  <img src={brewery.image} alt="" />
                </div>
              </div>
              <div className={style.containerR}>
                <p>
                  <strong>Description: </strong>
                  <span className={style.textBox}>{brewery.description}</span>
                </p>
              </div>
            </div>
           <div className={style.beers}>
            <h2>Nuestras Cervezas:</h2>
           <div className={style.cardsContainer}>
                    <div className={style.cardsBox}>
                      {
                        allBeers.length === 0 ?
                          <span>
                            (<Loading setLoading={setLoading} />)
                          </span> :
                          allBeers?.map((beer) =>
                          <BeerCard
                                id={beer.id}
                                key={beer.id}
                                name={beer.name}
                                price={beer.price}
                                image={beer.image ? beer.image : false}
                               
                              />
                          )
                          
                      }
                    </div>
                  </div>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}
