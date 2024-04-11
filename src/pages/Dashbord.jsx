import React, {useState} from 'react'
import "./dashbord.css"
import { Header } from '../Components/Header/Header'
import { Menu } from '../Components/Menu/Menu'
import { Footer } from '../Components/Footer/Footer'
import { Competitions } from '../Components/Competitions/Competitions'
import { Equipes } from '../Components/Equipes/Equipes'
import { Matieres } from '../Components/Matieres/Matieres'
import { Ecoles } from '../Components/Ecoles/Ecoles'

export const Dashbord = () => {
const [view, setView] = useState("competitions");

const handleMenuClick = (selectedView) => {
  setView(selectedView);
};

  return (
    <div className='dashbord'>
        <div className="container-left">
          <Menu onViewChange={handleMenuClick} />
        </div>
        <div className='container-right'>
          <Header />
          {view === "competitions" ? (<Competitions/>) 
          : view === "equipes" ? (<Equipes/>)
          : view === "matieres" ? (<Matieres/>)
          : view === "ecoles" ? (<Ecoles/>) : ("")}
          {/* <Footer/> */}
        </div>
    </div>
  )
}
