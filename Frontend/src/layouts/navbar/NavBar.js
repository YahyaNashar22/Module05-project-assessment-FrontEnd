import React from 'react'
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom'
import shoppingCart from "../../assets/shoppingCart.svg"

function NavBar() {
  return (
    <nav className={style.wrapper}>
      <h1 className={style.logo}>
        ASSESSMENT
      </h1>
      <aside className={style.buttons}
      >
      <img src={shoppingCart} alt='shoppingCart' className={style.shoppingCart} height='50px' width='50px' />
      <Link to='/signin' className={style.signin}>
        Sign in
      </Link>
      <Link to='/signup' className={style.signup}>
        Sign up
      </Link>
      </aside>

    </nav>
  )
}

export default NavBar