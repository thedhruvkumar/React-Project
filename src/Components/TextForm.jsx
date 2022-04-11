import React from 'react'
import { useState } from 'react'

const TextForm = () => {

    const [text, settext] = useState('')

    const handleBtn = () =>{
        const textval = document.getElementById('mainTextForm').value;
        settext(textval.toUpperCase())
    }
    const textChange = (event) =>{
        settext(event.target.value)
    }

  return (
    <>
<div class="mb-3">
  <textarea value={text} onChange={textChange} class="form-control" id="maintextForm" rows="3"></textarea>
</div>
<button className="btn-btn-primary">UpperCase</button>
    </>
  )
}

export default TextForm