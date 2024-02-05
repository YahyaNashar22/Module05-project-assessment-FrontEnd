import React from 'react'
import style from "./productCard.module.css"

function ProductCard(props) {
    const {title, price, description, image} = props
  return (
    <div className={style.wrapper}>
        <div className={style.upper}>
        <img className={style.img} src={image} alt='product' height='250' width='250' />
        </div>
        <div className={style.lower}>
        <p className={style.static}>Title: <span className={style.fetched}>{title}</span></p>
        <p className={style.static}>price: <span className={style.fetched}>{price} $</span></p>
        <p className={style.static}>description: <span className={style.fetched}>{description}</span></p>
        </div>
        <button type='button' className={style.buyNow}>Buy Now !</button>
    </div>
  )
}

export default ProductCard