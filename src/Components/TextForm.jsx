import React from 'react'
import { useState } from 'react'

const TextForm = () => {

    const [text, settext] = useState('')

    const handleUpper = () =>{
        settext(text.toUpperCase())
    }
    const handleLower = () =>{
        settext(text.toUpperCase())
    }
    const textChange = (event) =>{
        settext(event.target.value)
    }

  return (
    <>
<div class="mb-3">
    <h1>Enter Text</h1>
  <textarea value={text} onChange={textChange} class="form-control" id="maintextForm" rows="3"></textarea>
</div>
<button className="btn btn-primary m-1" onClick={handleUpper} >UpperCase</button>
<button className="btn btn-primary m-1" onClick={handleLower} >LowerCase</button>
{/* <button className="btn btn-primary" onClick={handleBtn} >UpperCase</button> */}
{/* <button className="btn btn-primary" onClick={handleBtn} >UpperCase</button> */}
    </>
  )
}

export default TextForm