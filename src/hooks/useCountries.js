// import localData from '../mocks/data.json'
import { useCallback, useEffect, useState } from 'react'
import { getData } from '../services/getData'

export function useCountries ({search, filterByRegion}) {

  const [countries, setCountries] = useState([])
  const [error, setError] = useState(null)

  const getCountries = useCallback(async () => {

    try {
      setError(null)
      const newCountries = await getData({search})
      setCountries(newCountries)
    } catch(e) {
      setError(e)
    }
  }, [search])


  const countriesFiltered = 
    filterByRegion !== 'all'
      ? [...countries].filter(country => {
        return filterByRegion.toLowerCase() === country.region.toLowerCase()
      })
      : countries

  useEffect(()=>{
    getCountries()
  }, [search, getCountries])

  return {countries, countriesFiltered, getCountries, error}
}