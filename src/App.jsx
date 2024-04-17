import React, { useState } from 'react'
import './App.css'
import UseContext from './components/UseContext'

export const ToggleTheme = React.createContext()

function App() {
  const [state, setState] = useState(false)

  const handleToggle = () => {
    setState(state => !state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Theme</button>
      <UseContext/>
    </ToggleTheme.Provider>
  )
}

export default App