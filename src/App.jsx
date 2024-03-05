import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'
import { Cards } from './components/Cards'
import { useCountries } from './hooks/useCountries'
import { useState } from 'react'
import { CardSelected } from './components/CardSelected'

function App() {

  const [search, setSearch] = useState('')
  const [filterByRegion, setFilterByRegion] = useState('')

  const [cardSelected, setCardSelected] = useState(false)
  const [infoSelected, setInfoSelected] = useState({})

  const {countries, countriesFiltered, getCountries, error} = useCountries({search, filterByRegion, cardSelected})

  return (
    <>
      <Header/>
      {
        !cardSelected
          ?
            <MainSection>
              <InputSection
                search={search}
                filterByrRegion={filterByRegion}
                setSearch={setSearch}
                setFilterByRegion={setFilterByRegion}
                getCountries={getCountries}
                error={error}
              />
              <Cards 
                data={countries}
                dataFiltered={countriesFiltered} setInfoSelected={setInfoSelected}
                setCardSelected={setCardSelected}
              />
            </MainSection>
          : <CardSelected 
              setCardSelected={setCardSelected}
              infoSelected={infoSelected}
            />
      }
    </>
  )
}

export default App
