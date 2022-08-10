/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBeerDetail,
  removeDetail,
  addToCart,
} from "../../redux/actions/index";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import style from "../BeerDetail/BeerDetail.module.css";
import NavBar from "../NavBar/NavBar";
import DetailCompra from "../DetailCompra/DetailCompra";
import Score from "../Score/Score";
import { Comment } from "../Comment/Comment";
import { Container } from "@mui/material";


export default function BeerDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const beer = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(removeDetail());
    dispatch(getBeerDetail(id));
  }, [dispatch, id]);

  return (
    <Container maxWidth='xxl' disableGutters='false' >
      <div>
       
        <div>
          <NavBar />
        </div>
        <div className={style.detailPage}>
          {beer.length === 0 ? (
            <div>
              (<Loading setLoading={setLoading} />)
            </div>
          ) : (
            <div>
              <div>
                {/* <Link to="/home">
                  <button className={style.button}>Back</button>
                </Link>
                <Link to="/update">
                  <button>Update</button>
                </Link> */}
                {/* //este botón es para la ruta de put para el vendedor */}
              </div>
              <div className={style.box}>
                <div className={style.leftContainer}>
                  <div>
                    <div className={style.dis}>
                      <h1>{beer.name}</h1>
                    </div>
                    <div className={style.image}>
                      <img src={beer.image} alt="" />
                    </div>
                  </div>
                </div>

                <div className={style.containerR}>

                  <p>
                    <h2>Description:</h2>
                    <span className={style.textBox}>{beer.description}</span>
                  </p>

                  <div>
                    <Score id={beer.id} />
                    <DetailCompra name={beer.name} price={beer.price} id={beer.id} stock={beer.stock}></DetailCompra>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={style.comments}>
            <Comment className={style.comments} id={id} />
          </div>
        </div>
      </div>
      </Container>
      );
}
