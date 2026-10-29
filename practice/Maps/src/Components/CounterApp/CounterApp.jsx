import React, {useState} from 'react'

const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Counter</button>
      <button onClick={
        ()=>{
          
          setCounter(counter+2)
        }
      }>Double Counter</button>
      <p>{counter}</p>
    </div>
  )
}

export default CounterApp