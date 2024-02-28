import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'
import { Cards } from './components/Cards'
import { useCountries } from './hooks/useCountries'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState('')
  const [searchByRegion, setSearchByRegion] = useState('')

  const {countries, getCountries, getCountriesByRegion, error} = useCountries({search, searchByRegion})

  return (
    <>
      <Header/>
      <MainSection>
        <InputSection
          search={search}
          searchByRegion={searchByRegion}
          setSearch={setSearch}
          setSearchByRegion={setSearchByRegion}
          getCountries={getCountries}
          getCountriesByRegion={getCountriesByRegion}
          error={error}
        />
        <Cards data={countries}/>
      </MainSection>
    </>
  )
}

export default App
