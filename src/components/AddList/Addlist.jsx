import React from 'react'
import './style.css'
// import Data from '../Data.json'
import Data from './Data.json'

export default function Addlist() {
  return (
    <div>
        {
           Data.map((data)=>(
            <div className='card' key={data.id}>
                <h1>{data.title}</h1>
                <p>{data.date}</p>
            </div>
           ))
        }
        <div className='card'>
            <button >Add List</button>
        </div>

    </div>
  )
}
