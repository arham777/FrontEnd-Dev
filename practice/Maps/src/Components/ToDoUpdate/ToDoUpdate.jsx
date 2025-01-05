// import React, {useState} from 'react'

// const ToDoUpdate = () => {

//   const toDoList=[
//     {task: 'Buy groceries', isDone: 'Not Completed'},
//     {task: 'Do laundry', isDone: 'Not Completed'},
//     {task: 'Learn React', isDone: 'Not Completed'},
//   ];

//   let [done, setDone]= useState('Not Completed');

//   return (
//     <div>
//       {toDoList.map(
//         (list,index)=>(
//           <div key={index}>
//             <h4>{list.task}</h4>
//             <button onClick={
//               (list)=>{
//                 setDone(done='Completed');
                
//               }
//             }>add list</button>
//             <p>{done}</p>
//           </div>
          
//         )
//       )}
//     </div>
//   )
// }

// export default ToDoUpdate

import React, { useState } from 'react';

const TodoUpdate = () => {
  // Initial state with tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Practice JavaScript', completed: false },
    { id: 3, text: 'Build a To-Do App', completed: false },
  ]);

  // Function to toggle the completed status
  const toggleCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)} 
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUpdate;
