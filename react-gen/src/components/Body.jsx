import React from 'react'
import { useState } from 'react'

const Body = ({title}) => {
    const [text, setText] = useState(title)
    
  return (
    <>
        <h1>{text}</h1>
        <button onClick={()=>{
            if(text==='hi 1' ){
                setText("hi 2")

            }else{
                setText("hi 1")
            }
        }}>click</button>
    </>
  )
}

export default Body