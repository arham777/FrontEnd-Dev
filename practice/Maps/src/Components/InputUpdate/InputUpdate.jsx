import React, {useState} from 'react'

const InputUpdate = () => {
  const [text , setText]= useState('');
  return (
    <div>

      <input type="text" value={text} placeholder='Type Something' onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <p value={text} onChange={
        (e)=>{
          e.target.value
        }
      }>{text}</p>
      
    </div>
  )
}

export default InputUpdate