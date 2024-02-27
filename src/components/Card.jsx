/* eslint-disable react/prop-types */
import '../styles/Card.css'

export function Card ({img, name, population, region, capital}) {
  return (
    <article className="card">
      <img src={img} alt={`${name}´s flag`} />
      <div className="card-info">
        <h3>{name}</h3>
        <div className="info">
          <span>{population}</span>
          <span>{region}</span>
          <span>{capital}</span>
        </div>
      </div>
    </article>
  )
}