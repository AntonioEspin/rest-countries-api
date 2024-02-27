import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'
import { Cards } from './components/Cards'
import data from './mocks/data.json'

function App() {

  console.log(data)
  
  const mappedInfo = data.map(element => ({
    id: element.alpha3Code,
    flag: element.flag,
    name: element.name,
    population: element.population,
    region: element.region,
    capital: element.capital
  }))

  return (
    <>
      <Header/>
      <MainSection>
        <InputSection/>
        <Cards data={mappedInfo}/>
      </MainSection>
    </>
  )
}

export default App
