import React from 'react';


const NavTags = (props) => {

  console.log(props.isSelected)
  return (
    <div >
      
        <li>
            <a className={props.isSelected ? 'active': null } href="#" onClick={props.select}>
            {/* <a className={isSelected ? 'active': null } href="#" onClick={props.select}> */}
            {props.children}
          </a>
        </li>
     
    </div>
  )
}

export default NavTags