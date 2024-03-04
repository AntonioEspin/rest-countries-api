/* eslint-disable react/prop-types */
import { GoArrowLeft } from "react-icons/go";

export function CardSelected ({setCardSelected, infoSelected}) {

  console.log(infoSelected)

  const {flag, name, population, region, subregion, capital, topLevelDomain, currencies, languages, countriesBorder} = infoSelected

  const valuesCurrencies =  Object.values(currencies)[0].name
  console.log(languages)
  // const valuesLanguages = Object.keys(languages).map(key => languages[key]).join(', ')
  const valuesLanguages = Object.values(languages).join(", ");

  const handleBack = () => {
    setCardSelected(prevStatus => !prevStatus)
  }
  return (
    <section className="cardSelected">
      <button onClick={handleBack}>
        <GoArrowLeft/>
        Back
      </button>
      <article className="cardSelected-info">
        <figure>
          <img src={flag} alt="" />
        </figure>
        <div className="container-info">
          <h2>{name}</h2>
          <div className="first-info">
            <span><strong>Population:</strong> {population}</span>
            <span><strong>Region:</strong> {region}</span>
            <span><strong>Sub Region:</strong> {subregion}</span>
            <span><strong>Capital:</strong> {capital}</span>
          </div>

          <div className="second-info">
            <span><strong>Top Level Domain:</strong> {topLevelDomain}</span>
            <span><strong>Currencies</strong> {valuesCurrencies}
            </span>
            <span><strong>Languages</strong> {valuesLanguages}</span>
          </div>
        </div>

        <div className="countries-info">
          <strong>Border Countries:</strong>
          <span></span>
        </div>
      </article>
    </section>
  )
}