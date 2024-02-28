import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'
import { Cards } from './components/Cards'
import { useCountries } from './hooks/useCountries'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState('')
  const [filterByRegion, setFilterByRegion] = useState('')

  const {countries, countriesFiltered, getCountries, error} = useCountries({search, filterByRegion})

  return (
    <>
      <Header/>
      <MainSection>
        <InputSection
          search={search}
          filterByrRegion={filterByRegion}
          setSearch={setSearch}
          setFilterByRegion={setFilterByRegion}
          getCountries={getCountries}
          error={error}
        />
        <Cards data={countries} dataFiltered={countriesFiltered}/>
      </MainSection>
    </>
  )
}

export default App
