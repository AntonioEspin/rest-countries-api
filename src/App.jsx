import './App.css'
import {MainSection} from './components/MainSection'
import { Header } from './components/Header'
import { InputSection } from './components/InputSection'

function App() {
  return (
    <>
      <Header/>
      <MainSection>
        <InputSection/>
      </MainSection>
    </>
  )
}

export default App
