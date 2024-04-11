import React, {useState} from 'react'
import "./menu.css"

export const Menu = ({onViewChange}) => {
  const [view, setView] = useState("competitions");

  const handleClick = (selectedView) => {
    setView(selectedView);
    onViewChange(selectedView);
  };

  return (
    <div className='menu'>
        <div className="brand poppins-bold">
            COMPETITION
        </div>
        <div className="listmenu poppins-medium">
            <ul>
                <li className={view === 'competitions' ? 'active' : ''} onClick={() => {handleClick("competitions")}}>Compétitions</li>
                <li className={view === 'equipes' ? 'active' : ''} onClick={() => {handleClick("equipes")}}>Equipes</li>
                <li className={view === 'matieres' ? 'active' : ''} onClick={() => {handleClick("matieres")}}>Matières</li>
                <li className={view === 'ecoles' ? 'active' : ''} onClick={() => {handleClick("ecoles")}}>Ecoles</li>
            </ul>
        </div>
    </div>
  )
}
