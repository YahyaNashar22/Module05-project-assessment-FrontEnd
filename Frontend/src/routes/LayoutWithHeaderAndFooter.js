import React from 'react'
import NavBar from '../layouts/navbar/NavBar'
import Footer from '../layouts/footer/Footer'

function LayoutWithHeaderAndFooter({children}) {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>
  )
}

export default LayoutWithHeaderAndFooter