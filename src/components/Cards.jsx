/* eslint-disable react/prop-types */
import { Card } from './Card'
import '../styles/Cards.css'

export function Cards ({data, dataFiltered, setInfoSelected, setCardSelected}) {
  const hasInfo = dataFiltered.length > 0

  return (
    <section className="cards-container">
      {
        hasInfo
          ? dataFiltered?.map(element => (
              <Card
                key={element.id}
                allInfo={{...element}}
                setInfoSelected={setInfoSelected}
                setCardSelected={setCardSelected}
              />
            ))
          : data?.map(element => (
              <Card
                key={element.id}
                allInfo={{...element}}
                setInfoSelected={setInfoSelected}
                setCardSelected={setCardSelected}
              />
            )) 
      }
    </section>
  )
}