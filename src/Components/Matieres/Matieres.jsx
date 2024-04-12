import React from 'react'
import "./matieres.css"
import {Table} from "../Table/Table"

export const Matieres = () => {
  return (
    <div className='matieres'>
      <div className="line1 poppins-medium">
          <h5>Tableau de bord | Matières </h5>
          <a href="#">+ Nouvelle Equipe</a>
      </div>
      <div className="matiere">
        <Table nom={"Liste des matières"}/>
      </div>
    </div>
  )
}
