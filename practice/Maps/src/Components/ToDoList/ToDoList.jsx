import React from 'react'

const ToDoList = () => {
  const list= ['Buy groceries', 'Clean the house', 'Learn React'];
  return (
    <div>
      <ul>
      {list.map(
        (list,index)=>(
          <li  key={index}>
            {list}
          </li>
        )
      )}
    </ul>
    </div>
  )
}

export default ToDoList