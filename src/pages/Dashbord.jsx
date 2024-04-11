import React from 'react'
import "./dashbord.css"
import { Header } from '../Components/Header/Header'
import { Menu } from '../Components/Menu/Menu'
import { Footer } from '../Components/Footer/Footer'
import { Competitions } from '../Components/Competitions/Competitions'

export const Dashbord = () => {
  return (
    <div className='dashbord'>
        <div className="container-left">
        <Menu/>
        </div>
        <div className='container-right'>
        <Header />
        <Competitions/>
        {/* <Footer/> */}
        </div>
    </div>
  )
}
