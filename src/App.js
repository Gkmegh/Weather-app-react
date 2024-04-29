import React from 'react'
import Home from './components/Pages/Home'
import Results from './components/Pages/Result'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Result' element={<Results/>} />
      </Routes>
    </div>
  )
}
export default App
