import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutWithHeaderAndFooter from "./LayoutWithHeaderAndFooter"
import LayoutWithoutHeaderAndFooter from "./LayoutWithoutHeaderAndFooter"
import Products from '../pages/products/Products'
import SigninPage from '../pages/signin/SigninPage';
import SignupPage from '../pages/signup/SignupPage';

function AppRoutes() {
  return (
    <section>
        <BrowserRouter>
        <Routes>
            <Route index path='/' element ={
                <LayoutWithHeaderAndFooter>
                    <Products />
                </LayoutWithHeaderAndFooter>
            } />
            <Route path='/signin' element={
                <LayoutWithoutHeaderAndFooter>
                    <SigninPage />
                </LayoutWithoutHeaderAndFooter>
            } />
            <Route path='/signup' element={
                <LayoutWithoutHeaderAndFooter>
                    <SignupPage />
                </LayoutWithoutHeaderAndFooter>
            } />
        </Routes>
        </BrowserRouter>
    </section>
  )
}

export default AppRoutes