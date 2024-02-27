import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'
import { Cards } from './components/Cards'
import { useCountries } from './hooks/useCountries'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState('')

  const {mappedInfo} = useCountries({search})

  return (
    <>
      <Header/>
      <MainSection>
        <InputSection
          search={search}
          setSearch={setSearch}
        />
        <Cards data={mappedInfo}/>
      </MainSection>
    </>
  )
}

export default App
