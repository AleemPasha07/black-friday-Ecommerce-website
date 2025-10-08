import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Shop from './Shop'
import Footer from '../../components/Footer'

const Frontend = () => {
    return (
        <>
            <Header />
            <main className="flex-1 w-full">     
            <Routes>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend
