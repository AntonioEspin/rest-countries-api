// import localData from '../mocks/data.json'
import { useEffect, useState } from 'react'
import { getData, getDataByRegion } from '../services/getData'

export function useCountries ({search, searchByRegion}) {

  const [countries, setCountries] = useState([])
  const [error, setError] = useState(null)

  const getCountries = async () => {

    try {
      setError(null)
      const newCountries = await getData({search})
      setCountries(newCountries)
    } catch(e) {
      setError(e)
    }
  }

  const getCountriesByRegion = async () => {
    try {
      setError(null)
      const newCountries = await getDataByRegion({searchByRegion})
      setCountries(newCountries)
    } catch(e) {
      setError(e)
    }
  }

  useEffect(()=>{
    getCountries()
  }, [search])

  useEffect(()=>{
    getCountriesByRegion()
  },[searchByRegion])

  return {countries, getCountries, getCountriesByRegion, error}
}