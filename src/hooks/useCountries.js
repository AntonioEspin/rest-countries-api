// import localData from '../mocks/data.json'
import { GetData } from '../services/getData'

export function useCountries ({search}) {

  const {data} =  GetData({search})

  const mappedInfo = data?.map(element => ({
    id: element.cca3,
    flag: element.flags.svg,
    name: element.name.common,
    population: element.population,
    region: element.region,
    capital: element.capital
  }))

  return {mappedInfo}
}