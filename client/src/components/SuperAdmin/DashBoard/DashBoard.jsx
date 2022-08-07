import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPurchases, getAllSellers } from '../../../redux/actions'
import style from './DashBoard.module.css'
export default function DashBoard() {

    const allPurchases = useSelector(state => state.allPurchases)
    const allUser = useSelector(state => state.user)
    const allSellers = useSelector(state => state.allSellers)
    const allBeers = useSelector(state => state.allBeers)
    console.log(allPurchases);
    let totalEarnings = 0
    let soldUnits = 0
    for (let i = 0; i < allPurchases.length; i++) {
        totalEarnings += allPurchases[i].totalPrice
        for (let j = 0; j < allPurchases[i].purchaseDetails.length; j++) {
            soldUnits += allPurchases[i].purchaseDetails[j].cant
        }
    }
    return (
        <div className={style.dashBoard}>
            <div className={style.totalEarnings}>
                <h2>Total Earnings: </h2>
                <div className={style.totalEarning}><h5>$ {totalEarnings.toFixed(2)}</h5></div>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <h2>Total Purchases: </h2>
                    <h5> {allPurchases.length}</h5>
                </div>
                <div className={style.card}>
                    <h2>Total Users: </h2>
                    <h5> {allUser.length}</h5>
                </div>
                <div className={style.card}>
                    <h2>Total Breweries: </h2>
                    <h5> {allSellers.length}</h5>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <h2>Sold units: </h2>
                    <h5> {soldUnits}</h5>
                </div>
                <div className={style.card}>
                    <h2>Total Beers: </h2>
                    <h5> {allBeers.length}</h5>
                </div>
            </div>
        </div>
    )
}