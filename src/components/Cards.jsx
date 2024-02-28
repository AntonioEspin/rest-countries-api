/* eslint-disable react/prop-types */
import { Card } from './Card'
import '../styles/Cards.css'

export function Cards ({data, dataFiltered}) {
  const hasInfo = dataFiltered.length > 0

  return (
    <section className="cards-container">
      {
        hasInfo
          ? dataFiltered?.map(element => (
              <Card
                key={element.id}
                img={element.flag}
                name={element.name}
                population={element.population}
                region={element.region}
                capital={element.capital}
              />
            ))
          : data?.map(element => (
              <Card
                key={element.id}
                img={element.flag}
                name={element.name}
                population={element.population}
                region={element.region}
                capital={element.capital}
              />
            )) 
      }
    </section>
  )
}