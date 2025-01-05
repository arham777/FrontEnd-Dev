import React , {useRef}  from 'react'

const FormComponent = () => {

  const nameRef= useRef()
  const detialsRef =useRef()

  const handleSubmit = (event)=>{
    event.preventDefault()
    const taskName= nameRef.current.value
    const taskDetails = detialsRef.current.value
    console.log(taskName,taskDetails)

    event.target.reset()
    
  }

  return (
    <div>
      <h1>FormComponent</h1>

      <form onSubmit={handleSubmit} >
        
        <label htmlFor="name">Task Name: </label>
        <input type="text" id="name" ref={nameRef} />

        <br />

        <label htmlFor="description">Task Details: </label>
        <input type="text" id="description" ref={detialsRef} />

        <br />

        <button type="submit" >Add</button>


      </form>
    </div>
  )
}

export default FormComponent