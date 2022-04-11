import React from 'react'
import { useState } from 'react'

const TextForm = () => {

    const [text, settext] = useState(0)

    const handleBtn = () =>{

    }
    const textChange = () =>{
        settext(document.getElementById('maintextForm').innerText)
    }

  return (
    <>
<div class="mb-3">
  <label HtmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea value={text} onChange={textChange} class="form-control" id="maintextForm" rows="3"></textarea>
</div>
    </>
  )
}

export default TextForm