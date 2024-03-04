/* eslint-disable react/prop-types */
import '../styles/Card.css'

export function Card ({ allInfo, setInfoSelected, setCardSelected}) {

  const {flag, name, population, region, capital} = allInfo

  const handleSelected = () => {
    setCardSelected(prevStatus => !prevStatus)
    setInfoSelected(allInfo)
  }
  return (
    <article className="card" onClick={handleSelected}>
      <img src={flag} alt={`${name}´s flag`} />
      <div className="card-info">
        <h3>{name}</h3>
        <div className="info">
          <p>Population: <span>{population}</span></p>
          <p>Region: <span>{region}</span></p>
          <p>Capital: <span>{capital}</span></p>
        </div>
      </div>
    </article>
  )
}