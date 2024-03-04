export async function getData ({search}) {
  const API = search ? `https://restcountries.com/v3.1/name/${search}` : `https://restcountries.com/v3.1/all`

  try {
    const response = await fetch(API)
    const data = await response.json()
  
    return data?.map(element => ({
      id: element.cca3,
      flag: element.flags.svg,
      name: element.name.common,
      nativeName: element.name.nativeName,
      population: element.population,
      region: element.region,
      subregion: element.subregion,
      topLevelDomain: element.tld,
      currencies: element.currencies,
      languages: element.languages,
      capital: element.capital,
      countriesBorder: element.borders
    }))
  } catch (e) {
    throw new Error()
  }
}