import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col mx-auto w-[600px] justify-start ">
      <h1>Vite + React</h1>
      <p className="ml-5">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
