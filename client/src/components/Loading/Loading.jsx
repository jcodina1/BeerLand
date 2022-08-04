import React from 'react';
import loading from '../../img/loading.gif'
export default function Loading({ setLoading }) {
    return (
        <div>
            <div>
                <img src={loading} alt='' />
            </div>
            
        </div>
    )
}