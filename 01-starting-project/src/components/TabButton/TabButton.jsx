import React from 'react'

export default function TabButton (props){
  
    function handleClick () {
        console.log('Hello World');
    }

    console.log(props.isSelected)

    return (
   <>

    <li>
        {/* <button onClick={handleClick} >
            {props.children}
            {props.title}
        </button> */}

        <button className={props.isSelected ? 'active' : null } onClick={props.select} >
            {props.children}
            {props.title}
        </button>

    </li>

   </>
  );
};
