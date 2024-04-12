import React from 'react'
import "./table.css"

export const Table = ({nom}) => {
    const data = [
        {
            nom: "Team 1",
            point: 800,
            rang: 2
        },
        {
            nom: "Team 2",
            point: 900,
            rang: 1
        },
        {
            nom: "Team 3",
            point: 600,
            rang: 4
        },
        {
            nom: "Team 4",
            point: 700,
            rang: 3
        }
      ];

  return (
    <table className='poppins-regular'>
        <thead>
            <tr>
                <th>{nom}</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.nom}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
