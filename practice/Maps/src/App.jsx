import React from 'react'
import NamesList from './Components/NamesList/NamesList'
import ProductCards from './Components/NamesList/ProductCards/ProductCards'
import Buttons from './Components/Buttons/Buttons'
import ToDoList from './Components/ToDoList/ToDoList'
import CounterApp from './Components/CounterApp/CounterApp'
import InputUpdate from './Components/InputUpdate/InputUpdate'
import ToDoUpdate from './Components/ToDoUpdate/ToDoUpdate'

const App = () => {
  return (
    <div>
      <NamesList/>
      <Buttons/>
      <ProductCards/>
      <h1>To-Do List</h1>
      <ToDoList/>
      <CounterApp/>
      <InputUpdate/>
      <ToDoUpdate/>

    </div>
  )
}

export default App