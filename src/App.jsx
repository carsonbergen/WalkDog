import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-4'>
        <h1 className='font-sans text-6xl text-secondary'>
          Hello, WalkDog! 
        </h1>
      </div>
    </>
  )
}

export default App
