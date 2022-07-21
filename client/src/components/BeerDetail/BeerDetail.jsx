/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeerDetail, removeDetail } from "../../redux/actions/index";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function BeerDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const beer = useSelector((state) => state.detail);
  console.log(beer);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(getBeerDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {beer.length === 0 ? (
        <div>
          (<Loading setLoading={setLoading} />)
        </div>
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
                <strong>Price: </strong>
                {beer.price}
              </p>
              <p>
                <strong>Stock: </strong>
                {beer.stock}
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
