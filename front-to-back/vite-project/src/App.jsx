import { useEffect , useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [list , setList]= useState([])


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
  }, []
);


  return (
    <>
      {/* <div className='bg-red-500 h-screen text-white flex justify-center items-center text-3xl font-bold' >
        This is Tailwind
      </div> */}

      <h1>List from backend</h1>
      <ul>
        {list.length > 0 ? (
          list.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Roll no:</strong> {item.rollno || 'No details available'}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>

    </>
  )
}

export default App
