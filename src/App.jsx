import { useState } from 'react'
import './App.css'
import HandleForm from './components/HandleForm/HandleForm'
import Addlist from './components/AddList/Addlist'
import Modal from './components/Modal/Modal'

function App() {
  const[show,setShow]=useState(null)
 const handleChildData=(childData)=>{
    setShow(childData);
 }

  return (
    <>
      {/* <HandleForm /> */}
      
      <Modal onChildData={handleChildData} />
      <Addlist />
        {
          show && <Modal />
        }

       
    </>
  )
}

export default App
