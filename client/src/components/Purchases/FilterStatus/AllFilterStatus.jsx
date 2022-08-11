import { React } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../../redux/actions/index'
import styles from './styles.module.css'

export default function AllFilterStatus() {
    const dispatch = useDispatch();

    function handleChange(e) {
        e.preventDefault();
        dispatch(action.filterByStatus(e.target.value));
        dispatch(action.setPage(1));
    }

    return (
        <div>
            <label>Filter by status</label>
            <select className={styles.select} onChange={(e) => handleChange(e)}>
                <option value="All">All</option>
                <option value="PENDING">Pending</option>
                <option value="CANCELLED">Cancelled</option>
                <option value="COMPLETED">Completed</option>
            </select>
        </div>
    )
}   