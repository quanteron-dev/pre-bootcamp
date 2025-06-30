import React, { useState } from 'react'

const test = () => {
    const [info, setInfo]= useState('');
  return (
    <>
    <div>
        {info}
        <label>Type here</label>
        <input value={"test"}>test</input>
        <button onClick={()=>{setInfo(prev=>prev+"value")}}>Submit</button>
    </div>
    </>
  )
}

export default test