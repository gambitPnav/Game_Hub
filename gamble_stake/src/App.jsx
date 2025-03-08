import { useState } from 'react'
 import Square from './Components/Square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Square/>
    </>
  )
}

export default App
