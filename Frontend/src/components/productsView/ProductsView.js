import React from 'react'
import style from "./ProductsView.module.css"
import ProductCard from '../productCard/ProductCard.js'
import {products} from "../../fakeData.js"


function ProductsView() {
  return (
    <section className={style.wrapper}>
      {products.map((product,index)=>{return(
        <ProductCard title={product.title} description={product.description} price={product.price} image={product.image} />)
      })}
    </section>
  )
}

export default ProductsView