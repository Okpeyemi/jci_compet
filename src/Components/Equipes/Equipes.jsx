import React from 'react'
import "./equipes.css"
import { Table } from '../Table/Table'

export const Equipes = () => {
  return (
    <div className='equipes'>
      <div className="line1 poppins-medium">
          <h5>Tableau de bord | Equipes </h5>
          <a href="#">+ Nouvelle Equipe</a>
      </div>
      <div className="equipe">
        <Table nom={"Liste des équipes"}/>
      </div>
    </div>
  )
}
