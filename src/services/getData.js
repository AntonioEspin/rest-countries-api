export async function getData ({search}) {
  const API = search ? `https://restcountries.com/v3.1/name/${search}` : `https://restcountries.com/v3.1/all`

  try {
    const response = await fetch(API)
    const data = await response.json()
  
    return data?.map(element => ({
      id: element.cca3,
      flag: element.flags.svg,
      name: element.name.common,
      population: element.population,
      region: element.region,
      capital: element.capital
    }))
  } catch (e) {
    throw new Error()
  }
}