import { React, useState } from 'react'
import { removeOneFromCart } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
import { AiOutlineMinus } from 'react-icons/ai'
import { MdOutlineAdd } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'

export default function Item({ id, name, image, price, stock, handleItem, newDel }) {
    const dispatch = useDispatch()
    let beer = JSON.parse(localStorage.getItem("carrito")).filter(e => e.id === id)
    let cantidad = beer[0].cant
    const [cant, setCant] = useState(cantidad); // estado local
    console.log(stock)

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
            <div >
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                </div>
            </div>
            <div>
                <p>${price}</p>
                <div>
                    <button className='icon' onClick={e => handlePrice(e, "men")}><AiOutlineMinus size={20} /></button>
                    <input type="number" value={cantidad} readOnly id="" />
                    <button className='icon' onClick={e => handlePrice(e, "sum")}><MdOutlineAdd size={20} /></button>
                </div>
                <p>${price * (cantidad ? cantidad : 1)}</p>
                <button onClick={handleDelete}><FaRegTrashAlt size={30} /></button>
            </div>
        </div>
    )
}