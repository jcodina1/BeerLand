/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreweryDetail } from "../../redux/actions/index";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import style from '../BeerDetail/BeerDetail.module.css'
import NavBar from "../NavBar/NavBar";
import ShowBeers from "../ShowBeers/ShowBeers";


export default function BreweryDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const brewery = useSelector((state) => state.detail);


  useEffect(() => {
    dispatch(getBreweryDetail(id));
  }, [dispatch, id]);

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
              <Link to="/home">
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

                <div>
                  <ShowBeers />
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
