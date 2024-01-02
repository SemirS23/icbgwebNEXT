import React from 'react'
import styles from './ProductCard.module.css';



function ProductCard() {
  return (
    <div className={styles.card}>
        <h1>Product card component</h1>
        <newCard />
    </div>
  )
}

export default ProductCard