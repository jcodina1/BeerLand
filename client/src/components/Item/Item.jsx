import { React, useState } from 'react'
import { removeOneFromCart } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
import { AiOutlineMinus } from 'react-icons/ai'
import { MdOutlineAdd } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import style from '../Item/Item.module.css';

export default function Item({ id, name, image, price, stock, handleItem, newDel }) {
    const dispatch = useDispatch()
    let beer = JSON.parse(localStorage.getItem("carrito")).filter(e => e.id === id)
    let cantidad = beer[0].cant
    const [cant, setCant] = useState(cantidad); // estado local
    const finalPrice = price * (cantidad ? cantidad : 1);
    const total2 = finalPrice.toFixed(2)

    function handlePrice(e, op) {
        if (cant + 1 > stock && op === "sum") {
        } else if (cant - 1 < 1 && op === "men") {
        } else {
            let newCant = op === 'sum' ? cant + 1 : cant - 1;
            setCant(newCant)
            handleItem(name, price, newCant)
        }
    }

    function handleDelete(e) {
        e.preventDefault()
        dispatch(removeOneFromCart(id))
        newDel()
    }

    return (
        <div>
            <div className={style.item}>
                <img src={image} alt={name} />
                <h2 className={style.h2}>{name}</h2>
                <div className={style.box}>
                    <h3>${price}</h3>
                    <div className={style.amount2}>
                        <button  onClick={e => handlePrice(e, "men")}><AiOutlineMinus size={30} /></button>
                        <input type="number" value={cantidad} readOnly id="" />
                        <button  onClick={e => handlePrice(e, "sum")}><MdOutlineAdd size={30} /></button>
                    </div>
                    <h3>${total2}</h3>
                    <button className={style.trash} onClick={handleDelete}><FaRegTrashAlt size={30} /></button>
                </div>
                
            </div>
        </div>
    )
}