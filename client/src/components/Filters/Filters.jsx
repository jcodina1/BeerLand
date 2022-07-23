import { filterBeersBySeller, getAllBeers, orderByName, orderByPrice, getTypes, getAllSellers } from '../../redux/actions/index'
import {  ASC, DES, HIGHER_PRICE, LOWER_PRICE } from '../../redux/const'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import style from '../Filters/Filters.module.css'

export default function Filters({setCurrentPage}) {
    const dispatch = useDispatch()
    const seller = useSelector(state => state.allSellers)
    const [order, setOrder] = useState('');

    useEffect(() => {
        dispatch(getAllBeers())
    }, [dispatch])
    function handleFilterSeller(e) {
        e.preventDefault()
        dispatch(filterBeersBySeller(e.target.value))
     

    }
    function handleSort2(e) {
        dispatch(orderByPrice(e.target.value))
     
        setOrder(`Ordered ${e.target.value}`)
    }
  
    function handleSort(e) {
        e.preventDefault();

            dispatch(orderByName(e.target.value))
            setCurrentPage(1)
            console.log(e.target.value)
            setOrder(`Ordenado ${e.target.value}`)

    }

    // useEffect(() => {
    //     dispatch(getAllBeers())
    //     dispatch(getTypes())
    //     dispatch(getAllSellers())
    // }, [dispatch])

    return (
        <div className={style.filterbox}>
            <div className={style.filtercontainer}>
                <select className={style.select} onChange={(e) => {handleSort(e)}}>
                    <option hidden>Alphabetical Order</option>
                    <option value='All'>All</option>
                        <option value='asc'>A-Z</option>
                        <option value='desc'>Z-A</option>
                </select>
                 <select className={style.select} onChange={(e) => {
                    handleSort2(e)
                }}>
                    <option>Order By Price</option>
                    <option value={HIGHER_PRICE}>Higher Price</option>
                    <option value={LOWER_PRICE}>Lower Price</option>
                </select>
                <select className={style.select} onChange={(e) => handleFilterSeller(e)}>
                    <option value='All' >Brewery</option>
                    {seller.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select> 
            </div>
            
        </div>

    )

}
