import React from 'react';
import loading from '../../img/loading.gif'
import style from '../Loading/Loading.module.css'

export default function Loading({ setLoading }) {
    return (
        <div>
            <div>
                <img src={loading} alt='beer animation' className={style.loading} />
            </div>
            
        </div>
    )
}