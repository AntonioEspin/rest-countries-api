/* eslint-disable react/prop-types */
import { Card } from './Card'
import '../styles/Cards.css'

export function Cards ({data}) {
  const hasInfo = data.length > 0

  return (
    <section className="cards-container">
      {
        hasInfo
          ? data.map(element => (
              <Card
                key={element.id}
                img={element.flag}
                name={element.name}
                population={element.population}
                region={element.region}
                capital={element.capital}
              />
            ))
          : <p>No hay información</p> 
      }
    </section>
  )
}