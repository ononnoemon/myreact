import React, { useState } from 'react'
import './Style.css'

export default function Modal(props) {
   
    const[close,setClose]=useState(false)

    const handleOnClick=()=>{
        setClose(true)
    }
    props.onChildData(close);
  return (
    <div>
        <div className='modal-style' >
        <form action="" >
            <div>
                 <label htmlFor="">Which Programming do you love?</label><br />
                <input type="text" />
            </div>
            <div>
                 <label htmlFor="">When did you start learning ?</label><br />
                <input type="date" />
            </div>
            <button>Submit</button>
        </form>
         <button onClick={handleOnClick}>Close</button>
        </div>
       
    </div>
  )
}
