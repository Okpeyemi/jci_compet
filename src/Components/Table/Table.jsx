import React from 'react'
import "./table.css"

export const Table = () => {
    const data = [
        {
            nom: "Team 1",
        },
        {
            nom: "Team 2",
        },
        {
            nom: "Team 3",
        },
        {
            nom: "Team 4",
        }
      ];

  return (
    <table>
        <thead>
            <tr>
                <th>Noms équipes</th>
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
