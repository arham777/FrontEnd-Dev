import React from 'react'

const Buttons = () => {

  const dynamicButtons= [
    'Home','About','Services', 'Contact'
  ];

  return (
    <div>
      {dynamicButtons.map(
        (button,index)=>(
          <button key={index} onClick={
            ()=>{
              console.log(`${button} was clicked`);
            }
          }>
            {button}
          </button>
        )
      )}
    </div>
  )
}

export default Buttons