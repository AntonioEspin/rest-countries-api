/* eslint-disable react/prop-types */
import '../styles/MainSection.css'
export function MainSection ({children}) {
  return (
    <main className="main-container">
      {children}
    </main>
  )
}