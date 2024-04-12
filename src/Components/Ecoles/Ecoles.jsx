import React from 'react'
import "./ecoles.css"
import {Table} from "../Table/Table"

export const Ecoles = () => {
  return (
    <div className='ecoles'>
      <div className="line1 poppins-medium">
          <h5>Tableau de bord | Ecoles </h5>
          <a href="#">+ Nouvelle Equipe</a>
      </div>
      <div className="ecole">
        <Table nom={"Liste des écoles"}/>
      </div>
    </div>
  )
}
