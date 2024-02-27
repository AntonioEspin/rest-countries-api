/* eslint-disable react/prop-types */
import '../styles/Card.css'

export function Card ({img, name, population, region, capital}) {
  return (
    <article className="card">
      <img src={img} alt={`${name}´s flag`} />
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