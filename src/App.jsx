import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import UseRef from './UseRef'
import Prop from './Prop'

function App() {
 
  
  const [count, setCount] = useState(0)
  const [minus, setminus] = useState(0)
  
  const increment = () => {  
    setCount(count + 1);
 }
  const decrement = () => {
   setminus(minus - 1);
  }
  const multiply = () => {
    console.log('re rendered');
   
    return count * 10;
    
}
 
    
  return ( 
    <> <br />  COUNT *10=
      {multiply()} <br /> 
      <button style={{background:'red'}} onClick={increment}>Addition</button>
      <button style={{background:'green'}} onClick={decrement}>Subtraction</button> <br />
      Addition:{count} <br />
      Subtraction:{minus}
      <UseRef />
      <Prop count={count} />
      </>
      
   
  )
}

export default App
