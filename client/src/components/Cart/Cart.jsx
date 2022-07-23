import React, { useState, useEffect } from "react";
import style from '../Cart/Cart.module.css'
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

export default function Cart() {
  const [checkout,setCheckout]= useState(false)
  const[edit,setEdit]=useState(false)
  const [carrito, setCarrito] = useState([])
  
 let quantity= 'cantidad'
  let products = [
    {
      "name": "Stella Artois",
      "description": "Pack Cerveza Premium Lager",
      "price": "8290",
      "stock": 102,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage0.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 14,
      "cantidad":0
    },
    {
      "name": "Budweiser",
      "description": "Pack Cerveza Lager",
      "price": "7390",
      "stock": 53,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage1.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 6,
      "cantidad":0
    },
    {
      "name": "Royal Guard",
      "description": "Pack 18 Cervezas Latas 350 cc c/u",
      "price": "7790",
      "stock": 120,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage2.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 14,
      "cantidad":0
    },
    {
      "name": "Sol",
      "description": "Pack Cervezas",
      "price": "3990",
      "stock": 141,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage3.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 2,
      "cantidad":0
    },
    {
      "name": "Stella Artois",
      "description": "Pack Cerveza Premium Lager",
      "price": "3790",
      "stock": 15,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage4.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 6,
      "cantidad":0
    }]
    // products.forEach(p=> {
    //   setCarrito([...carrito, p.cantidad])
    // } )
   function contar(producto){
    let busqueda = carrito.reduce((acc, producto) => {

      const clave = JSON.stringify(producto);
      acc[clave] = ++acc[clave] || 0;
      return acc;
    }, {});
    
    
    let duplicados = carrito.filter( (producto) => {
      return busqueda[JSON.stringify(producto)];
    });
    
    return duplicados
   }
    console.log(carrito)   
  return (

    <>
      <div className={style.conteiner}>
        <div className={style.containerTitle}>
          <h1 className={style.title}> Cart X🅱🅴🅴🆁🅻🅰🅽🅳 ( ͡❛ ͜ʖ ͡❛) Products</h1>
          <Link to='/home'>Continue Shopping</Link>
        </div>
        <div className={style.containerProducts}>
        <div className={style.boxend}>🛒CheckOut</div>
        {
          products.map(e=><>
          
          <div  className={style.info} key={e.name}>
            <img src={e.image} />
            <span>{e.name}</span>
            <span>{e.price}</span>
            <div className={style.editDelete}>
            {!edit?<><span onClick={()=>setEdit(true)}>✏️</span>
            <span>❌</span></>:
            <><button onClick={()=>{ setCarrito([...carrito,e.name])
            } }>➕</button>
           <h4>{carrito.filter(producto=>producto===e.name).length}</h4> 
            <button onClick={()=>{e.cantidad--;console.log(e.cantidad);}}>➖</button>
            <button onClick={()=>setEdit(false)}>❌</button></>}
            
            </div>
            <span>Total: {carrito.filter(producto=>producto===e.name).length*e.price}</span>
          </div>
          
          </>)
        }
        </div>
      <div className={style.boxend}> 
        <h1>TOLTAL: </h1>
         {products
                .map((p) => parseInt(p.price))
                .reduce((prev, curr) => prev + curr)}
      </div>
      <div className={style.boxend}> 
        <button onClick={()=>setCheckout(true)}>CHECKOUT</button>
         
      </div>
      </div>
      {checkout ? 
              <>
                <Checkout /> <button onClick={()=>setCheckout(false)}>❌</button>
              </>
             : 
              ""
            }
    </>

  );


}
