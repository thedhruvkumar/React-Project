import React from 'react'
import { useState } from 'react'

const TextForm = () => {

    const [text, settext] = useState(0)

    const handleBtn = () =>{

    }
    const textChange = () =>{
        settext(text.value)
    }

  return (
    <>
<div class="mb-3">
  <label HtmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea value={text} onChange={textChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </>
  )
}

export default TextForm