import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Update from './pages/Update'
import Create from './pages/Create'

import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path="/*" element={<Home />} /> 
      <Route path="/details/:id/" element={<Details />} /> 
      <Route path="/update/:id/" element={<Update />} /> 
      <Route path="/add/" element={<Create />} /> 

    </Routes> 
  )
}

export default App
