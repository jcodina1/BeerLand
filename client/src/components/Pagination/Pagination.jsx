import React from 'react';

export default function Pagination({ beerPerPage, beers, page, currentBeer }){
    const pageNumber = [];

    for(let i=1; i<=Math.ceil(beers/beerPerPage); i++){
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
