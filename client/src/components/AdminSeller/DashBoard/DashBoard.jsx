import { useSelector } from 'react-redux'
import style from './DashBoard.module.css'

export default function DashBoard({user}) {
    const allPurchases = useSelector(state => state.userPurchases)
    const allBeers = useSelector(state => state.filterPlaceholder)
    console.log(allPurchases);
    let totalEarnings = 0
    let soldUnits = 0
    
    for (let i = 0; i < allPurchases.length; i++) {
        totalEarnings += allPurchases[i].totalPrice
        for (let j = 0; j < allPurchases[i].purchaseDetails.length; j++) {
            soldUnits += allPurchases[i].purchaseDetails[j].cant
        }
    }
console.log(totalEarnings)
    const TAX_RATE = 0.05;
    const invoiceTaxes = TAX_RATE * totalEarnings;
    const invoiceTotal = totalEarnings - invoiceTaxes;
    
    return (
        <div className={style.dashBoard}>
            <h1>Welcome {user.email}</h1>
            <div className={style.totalEarnings}>
                <h2>Total Earnings: </h2>
                <div className={style.totalEarning}><h5>$ {invoiceTotal.toFixed(2)}</h5></div>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <h2>Total Sales: </h2>
                    <h5> {allPurchases.length}</h5>
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