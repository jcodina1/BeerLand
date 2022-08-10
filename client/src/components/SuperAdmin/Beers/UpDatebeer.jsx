import { TableCell } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBeer } from "../../../redux/actions";

export default function UpDateBeer({ stock, price,id}) {
    const dispatch=useDispatch()
    const [values, setValues] = useState({
        price: price,
        stock: stock
    })
    const [upDate, setUpDate] = useState(false)
    function onChageInput(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }
    function onSubmitUpDate(){
        dispatch(updateBeer(values, id))
        setUpDate(false)
    }
    return (
        <>
            <TableCell>{!upDate ? values.stock : <>Previous Stock: {stock} <input name='stock' value={values.stock}  type='number' onChange={(e) => onChageInput(e)} placeholder='New Stock' /></>}</TableCell>
            <TableCell> {!upDate ?`$${values.price}` : <>Previous Price:$ {price}<input name='price' value={values.price}  type='number' onChange={(e) => onChageInput(e) } placeholder='New price'/></>}</TableCell>
            <TableCell>{!upDate ? <button onClick={() => setUpDate(true)}>UpDate</button> :
                  <><p onClick={(e) => onSubmitUpDate()}>✅</p><p onClick={() => setUpDate(false)}>❌</p></>}</TableCell>
        </>
    )
}