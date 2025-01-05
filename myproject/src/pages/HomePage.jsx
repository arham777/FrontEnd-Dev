import React from 'react'
import { useEffect} from 'react'
import axios from 'axios'

const HomePage = () => {
  async function apiCall () {
    try{
      const response = await axios.get("http://127.0.0.1:8000/firstapp/students/",
        {params: { ordering: '-name'}, }
       )
      //  const response = await axios.post (
      //   "http://127.0.0.1:8000/firstapp/input-books/",
      //   {
      //     name:'name' , price:200, author:'author'
      //   }
      //  )
    console.log(response.data)
    setList(response.data)
    } catch (error) {
      alert(error)
    } 
    // finally {
    //   alert('ok')
    // }
  }

  
  useEffect(()=>{
    apiCall();
  }
);

  return (
    <div>   
        <h1>HomePage</h1>
    </div>
  )
}

export default HomePage