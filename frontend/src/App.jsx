import { useState } from 'react'
import './App.css'
// import Dashboard from './pages/Dashboard'
import Dashboard from './pages/dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/>
    
    </>
  
  )
}

export default App
