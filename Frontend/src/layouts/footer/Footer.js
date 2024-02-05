import React from 'react'
import style from "./Footer.module.css"

function Footer() {
  return (
    <footer className={style.wrapper}>
      <p className={style.txt}>
        This is the front end for the Module-05 assessment.<br/> © All rights reserved
      </p>
    </footer>
  )
}

export default Footer