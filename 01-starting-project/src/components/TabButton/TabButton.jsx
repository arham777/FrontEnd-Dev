import React from 'react'

export default function TabButton (props){
  
    function handleClick () {
        console.log('Hello World');
    }

    return (
   <>

    <li>
        {/* <button onClick={handleClick} >
            {props.children}
            {props.title}
        </button> */}

        <button onClick={props.select} >
            {props.children}
            {props.title}
        </button>

    </li>

   </>
  );
};
