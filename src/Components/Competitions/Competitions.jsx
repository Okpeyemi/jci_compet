import React, {useState} from 'react'
import "./competitions.css"
import {Table} from "../Table/Table";

export const Competitions = () => {
  const [toogleButton, setToggleButton] = useState(false);
  const [changeColor, setChangeColor] = useState("var(--sucessColor)");

  const toogleChange = () => {
    if (toogleButton === false) {
        setToggleButton(true);
        setChangeColor("var(--dangerColor)");
    } else {
        setToggleButton(false);
        setChangeColor("var(--sucessColor)");
    }
  }

  return (
    <div className='competitions'>
        <div className="line1 poppins-medium">
            <h5>Tableau de bord | Compétitions </h5>
            <a href="#">+ Nouvelle Compétition</a>
        </div>
        <div className="competition">
            <div className="title poppins-medium">
                <h3>Compétition de Conjugaison</h3>
                <a href="#" onClick={() => {toogleChange()}} style={{color: changeColor}}>
                    {toogleButton ? "- Voir moins" : "+ Voir plus"}
                </a>
            </div>
            {toogleButton ? (<div className="content poppins-regular">
                <Table/>
                <Table/>
                <Table/>
                <Table/>
            </div>)  : ("")}
        </div>
    </div>
  )
}
