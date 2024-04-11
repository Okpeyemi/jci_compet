import React from 'react'
import "./dashbord.css"
import { Header } from '../Components/Header/Header'
import { Menu } from '../Components/Menu/Menu'
import { Footer } from '../Components/Footer/Footer'

export const Dashbord = () => {
  return (
    <div className='dashbord'>
        <div className="container-left">
        <Menu/>
        </div>
        <div className='container-right'>
        <Header />
        {/* <Footer/> */}
        </div>
    </div>
  )
}
