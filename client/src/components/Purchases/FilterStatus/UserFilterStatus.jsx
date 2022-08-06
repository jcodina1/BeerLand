import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../../redux/actions/index'

export default function UserFilterStatus() {
    const dispatch = useDispatch();
    const allOrders = useSelector((state) => state.userPurchases);
    const filtered = allOrders.map((e) => e.status);

    function handleChange(e) {
        e.preventDefault();
        dispatch(action.filterSalesByStatus(e.target.value));
        dispatch(action.setPage(1));
    }
console.log(allOrders)
console.log(filtered)

    return (
        <div>
            <select onChange={(e) => handleChange(e)}>
                <option value="All">Filter by status</option>
                <option value="PENDING">Pending</option>
                <option value="CANCELLED">Cancelled</option>
                <option value="COMPLETED">Completed</option>
            </select>   
        </div>
    )
}   