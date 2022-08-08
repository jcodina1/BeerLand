import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSalesBySellerId } from "../../redux/actions/index"

export default function BrewerySales(sellerId){
    const dispatch = useDispatch();
    const sales = useSelector((state) => state.brewerySales);
    const [showModal, setShowModal] = useState(false);
    

    useEffect(() => {
      if (!sales.length) {
        dispatch(getSalesBySellerId(sellerId));
      }
    }, [dispatch]);

  return (
    <div className=''>
      <p>estas son tus ventas.</p>
      {sales.map((sale) => {
        return (
          <div className='{styles.purchaseContainer}'>
            Cervezas:{" "}
            {sale.beers.map((beer) => {
              return <p> {beer.name} </p>;
            })}
            <p>Total: {sales.total}</p>
            <p>Estado de la Compra: {sales.status} </p>
            <button onClick={setShowModal((showModal) => !showModal)}>
              Ver detalle de la compra.
            </button>
          </div>
        );
      })}
    </div>
  );
}

// {
//   "id":"",
//   "totalPrice":"",
//   "status":"",
//   "address":"",
//   "userId":""
// }