import { useState } from "react"
import { Main } from "./styled-components/AppStyle"
import Sun from "/images/icon-sun.svg"
import Moon from "/images/icon-moon.svg"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Main darkmode={`${darkMode}`}>
      <div className="w-[100%] max-w-[730px]">
        <div className="flex justify-between items-center mb-[36px]" id="header">
          <h1 className="logo">devfinder</h1>
          <div className="dark-mode" onClick={() => setDarkMode(!darkMode)}>
            <h1>{darkMode ? "LIGHT" : "DARK"}</h1>
            <img src={darkMode ? Sun : Moon} alt={darkMode ? "Sun" : "Moon"}/>
          </div>
        </div>
        
      </div>
    </Main>
  )
}

export default App