import React from "react";

export default function Pagination({ allCountries, pagination }) {
  const pages = [];
  for (let i = 1; i <= allCountries / 10; i++) {
    pages.push(i);
  }
  return (
    <div>
      <ul>
        {pages &&
          pages?.map((n) => {
            return <button onClick={() => pagination(n)}>{n}</button>;
          })}
      </ul>
    </div>
  );
}
