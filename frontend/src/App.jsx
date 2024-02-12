import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import FilterComponent from './component/FilterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <Signup/>
    <Navbar/>
    <FilterComponent/>
    </>
  
  )
}

export default App
