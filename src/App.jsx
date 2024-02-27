import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'
import { Cards } from './components/Cards'

function App() {
  return (
    <>
      <Header/>
      <MainSection>
        <InputSection/>
        <Cards/>
      </MainSection>
    </>
  )
}

export default App
