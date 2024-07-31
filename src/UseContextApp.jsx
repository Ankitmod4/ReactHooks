import React from 'react'
import { useContext } from 'react'
import { data } from './App'
const UseContextApp = () => {
    const count = useContext(data);
  return (
      <div>{count}</div>
  )
}

export default UseContextApp