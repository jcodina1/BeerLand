import React from "react";
import styles from "../Pagination/Pagination.module.css";

export default function Pagination({
  page,
  paginate,
  limitPage,
  pageControl,
  firstPrevControl,
  nextLastControl,
}) {
  let pages = {
    prepre: 0,
    pre: 0,
    page: page,
    next: 0,
    nextnext: 0,
  };

  if (page - 2 < 0) {
    pages.prepre = 0;
  } else {
    pages.prepre = page - 2;
  }
  if (page - 1 < 0) {
    pages.pre = 0;
  } else {
    pages.pre = page - 1;
  }
  if (page + 1 > limitPage) {
    pages.next = 0;
  } else {
    pages.next = page + 1;
  }
  if (page + 2 > limitPage) {
    pages.nextnext = 0;
  } else {
    pages.nextnext = page + 2;
  }

  let numerPages = [pages.prepre, pages.pre, page, pages.next, pages.nextnext];

  return (
    <div className={styles.containerPag}>
      <ul>
        <button
          disabled={firstPrevControl}
          className={firstPrevControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, 1)}
          name="first"
        >
          First Page
        </button>
        <button
          disabled={firstPrevControl}
          className={firstPrevControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, "prev")}
          name="previous"
        >
          {"<<"}
        </button>
      </ul>
      <div className={styles.paginate}>
        <ul>
          {numerPages.map((n) => {
            if (n > 0) {
              return (
                <li
                  className={n === page ? styles.currentPage : ""}
                  key={n}
                  onClick={(e) => paginate(e, n)}
                  id={n}
                >
                  <h5>{n}</h5>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <ul>
        <button
          disabled={nextLastControl}
          className={nextLastControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, "next")}
          name="next"
        >
          {">>"}
        </button>
        <button
          disabled={nextLastControl}
          className={nextLastControl ? styles.disable : styles.pagButton}
          onClick={(e) => paginate(e, limitPage)}
          name="last"
        >
          Last Page
        </button>
      </ul>
    </div>
  );
}

// export default function Pagination({
//   beerPerPage,
//   allBeers,
//   page,
//   currentBeer,
//   currentPage,
//   setCurrentPage,
//   pageNumberLimit,
//   setPageNumberLimit,
//   maxPageNumberLimit,
//   minPageNumberLimit,
//   setMaxPageNumberLimit,
//   setMinPageNumberLimit,
// }) {
//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(allBeers.length / beerPerPage); i++) {
//     //for(let i=1; i<=18; i++){
//     pageNumber.push(i);
//   }

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//     if (currentPage + 1 > maxPageNumberLimit) {
//       setMaxPageNumberLimit(setMaxPageNumberLimit + pageNumberLimit);
//       setMinPageNumberLimit(setMinPageNumberLimit + pageNumberLimit);
//     }
//   };

//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);

//     if ((currentPage - 1) % pageNumberLimit == 0) {
//       setMaxPageNumberLimit(setMaxPageNumberLimit - pageNumberLimit);
//       setMinPageNumberLimit(setMinPageNumberLimit - pageNumberLimit);
//     }
//   };

//   return (
//     <nav>
//       <ul>
//         <button onClick={handlePrev}>Prev</button>

//         {pageNumber &&
//           pageNumber.map((number) => {
//             if (
//               number < maxPageNumberLimit + 1 &&
//               number > minPageNumberLimit
//             ) {
//               return (
//                 <button key={number} onClick={() => page(number)}>
//                   {number}
//                 </button>
//               );
//             } else {
//               return null;
//             }
//           })}

//         <button onClick={handleNext}>Next</button>
//       </ul>
//     </nav>
//   );
// }
