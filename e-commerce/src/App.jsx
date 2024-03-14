import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Oeuvre from '../components/oeuvre'


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
          <Oeuvre></Oeuvre>
      </div>
    </>
  )
}

export default App