import React from "react";
import styles from "./product.module.css";

export default function Product({image}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.typography}>
        Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...
      </div>
      <div className={styles.typography}>
        <div>
          <span className={styles.subTitle}>Marka:</span> Apple
        </div>
        <div>
          <span className={styles.subTitle}>Renk: </span> Siyah
        </div>
      </div>
      <div style={{ paddingTop: "13px" }} className={`${styles.typography}`}>
        <div className={styles.subTitle} style={{ color: "#000000" }}>
          90,85 TL
        </div>
        <div>
          <span
            style={{
              fontWeight: 400,
              color: "#9B9B9B",
              textDecoration: "line-through",
            }}
          >
            124,00 TL
          </span>
          <span
            className={styles.subTitle}
            style={{
              color: "#F90000",
              paddingLeft: "3px",
            }}
          >
            12%
          </span>
        </div>
      </div>
    </div>
  );
}
