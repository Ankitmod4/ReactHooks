import React,{useState} from 'react'
import { useRef } from 'react' 

const UseRefHook = () => {
  const [data, setdata] = useState("")
  const RefElement = useRef(" ")
  const handleclick = () => {
    setdata(''); 
    RefElement.current.focus();
  }  
  const handlechange = () => {
    RefElement.current.style.backgroundColor = 'red';
  }
  return ( 
    <>
    <div>UseRef</div>
      <input type="text" ref={RefElement} style={{border:'3px solid black'}} placeholder='enter the name'  onChange={(e)=>setdata(e.target.value)} value={data} />
    <button onClick={handleclick}>RESET</button>
      <button onClick={handlechange}>INPUT COLOR CHANGE</button>
      </>
  )
}

export default UseRefHook