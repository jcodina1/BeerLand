import React from 'react';

export default function Pagination({ beerPerPage, birras, page, currentBeer }){
    const pageNumber = [];

     for(let i=1; i<=Math.ceil(birras.length/beerPerPage); i++){
        //for(let i=1; i<=18; i++){
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumber && pageNumber.map(number => (
                        <button key={number} onClick={() => page(number)}>{number}</button>
                ))}
            </ul>
        </nav>
    )
}
