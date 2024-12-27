import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from './pages'
import './App.css'
import { useState } from "react"

function App() {
   const [ dark, setDark ] = useState('')
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App
