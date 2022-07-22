import React from "react";
import styles from "./styles.module.css";

export default function Checkout() {
  const products = [
    {
      name: "Stella Artois",
      description: "Pack Cerveza Premium Lager",
      price: "8290",
      stock: 102,
      image:
        "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage0.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      sellerId: 14,
    },
    {
      name: "Budweiser",
      description: "Pack Cerveza Lager",
      price: "7390",
      stock: 53,
      image:
        "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage1.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      sellerId: 6,
    },
    {
      name: "Royal Guard",
      description: "Pack 18 Cervezas Latas 350 cc c/u",
      price: "7790",
      stock: 120,
      image:
        "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage2.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      sellerId: 14,
    },
    {
      name: "Sol",
      description: "Pack Cervezas",
      price: "3990",
      stock: 141,
      image:
        "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage3.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      sellerId: 2,
    },
    {
      name: "Stella Artois",
      description: "Pack Cerveza Premium Lager",
      price: "3790",
      stock: 15,
      image:
        "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage4.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      sellerId: 6,
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.paymentContainer}></div>
        <div className={styles.productsContainer}>
          <div className={styles.headerAndFooter}></div>
          <div className={styles.productList}>
            {/* aca mapear productos con className={styles.productContainer}  ojo que es distinto a productsContainer */}

            {products.map((p) => {
              return (
                <div className={styles.productContainer}>
                  <img src={p.image} />
                  {` $${p.price}`}
                </div>
              );
            })}
          </div>
          <div className={styles.headerAndFooter}> aaaa</div>
        </div>
      </div>
    </>
  );
}
