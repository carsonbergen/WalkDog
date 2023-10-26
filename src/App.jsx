import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-4'>
        <h1 className='font-nunito text-6xl text-secondary'>
          Hello, WalkDog! 
        </h1>
        <h2 className='font-nunito-italic'>
          Italic text
        </h2>
      </div>
    </>
  )
}

export default App
