import React from 'react'

const NamesList = () => {
  const names=['Arham', 'Ali', 'Ahmad', 'Zain'];

  return (
    <div>
      <h2>NamesList</h2>
      <ul>
        {names.map( 
          (name,index) =>(
            <li key={index}>
              {name}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default NamesList