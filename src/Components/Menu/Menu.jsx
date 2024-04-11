import React from 'react'
import "./menu.css"

export const Menu = () => {
  return (
    <div className='menu'>
        <div className="brand poppins-bold">
            COMPETITION
        </div>
        <div className="listmenu poppins-medium">
            <ul>
                <li className='active'>Compétitions</li>
                <li>Equipes</li>
                <li>Matières</li>
                <li>Ecoles</li>
            </ul>
        </div>
    </div>
  )
}
