// import localData from '../mocks/data.json'
import { useEffect, useState } from 'react'
import { getData } from '../services/getData'

export function useCountries ({search}) {

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

  useEffect(()=>{
    getCountries()
  }, [search])

  return {countries, getCountries, error}
}