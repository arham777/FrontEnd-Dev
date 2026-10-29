import React from 'react'

const DisplayComponent = ( {tasks} ) => {
  return (
    <div>
      <br /><br /><br />

      {tasks.map(
        (task)=>(
          <div key={task.name}>
          <div>
            {task.name}
          </div>
          <br />
          <div>
            {task.detail}
          </div>

          <br />

          <button>Delete</button>
          <br /><br /><br /><br />
          </div>
        )
      )}
    </div>
  )
}

export default DisplayComponent