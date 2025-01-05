import React, { useRef } from 'react'
import axios from 'axios'

const FormComponent = ( {handleTasks} ) => {

    const nameRef= useRef()
    const detailRef = useRef()


    async function postTasks () {
      try {
        // const response = await axios.post("http://127.0.0.1:8000/formapp/todo-input/",
        const response = await axios.post("http://127.0.0.1:8000/api/token/",
          {
            username: nameRef.current.value,
            password: detailRef.current.value
          }
        )
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        console.log(response.data.access)
          } catch (error) {
            alert(error)
  
      }
  
    }

    const handleSubmit = (event)=>{
      event.preventDefault()
      const taskName= nameRef.current.value;
      const taskDetail= detailRef.current.value;

      postTasks();

      // console.log(taskName, taskDetail)
      handleTasks(taskName,taskDetail)
      event.currentTarget.reset()
    }

    

  return (
    <>
    
    <form onSubmit={handleSubmit} >
      <label htmlFor="name">Task Name: </label>
      <input type="text" id='name' ref={nameRef} />

      <br />
      <br />
      <label htmlFor="detail">Description: </label>
      <input type="text" id='detail' ref={detailRef} />

      <br />
      <br />
      <button type="submit" >Add Task</button>

      <br />
      <br />

    </form>

    <p>
      {localStorage.getItem("access")}
      </p>
      
    </>

  )
}

export default FormComponent