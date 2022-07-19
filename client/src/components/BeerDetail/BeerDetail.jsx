/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeers, getBeerDetail, removeDetail } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";

export default function BeerDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const beer = useSelector((state) => state.detail);
  console.log(beer);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(getBeerDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {beer.length === 0 ? (
        <div>{/* <Loader /> */}</div>
      ) : (
        <div>
          <div>
            <div>
              <h1>{beer.name}</h1>
            </div>
            <div>
              <img src={beer.image} alt="" />
            </div>
            <div>
              <p>
                <strong>Description: </strong>
                {beer.description}
              </p>
              <p>
                <strong>Description: </strong>
                {beer.regularPrice}
              </p>
              <p>
                <strong>Description: </strong>
                {beer.currentPrice}
              </p>
            </div>
          </div>
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}
