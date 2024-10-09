import React from 'react'

export default function TabButton (props){
  return (
   <>

    <li>
        <button>
            {props.children}
            {props.title}
        </button>
    </li>

   </>
  );
}
