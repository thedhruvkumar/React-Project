import React from 'react'
import { useState } from 'react'


const TextForm = () => {
    
    const [text, settext] = useState('')

    const handleUpper = () =>{
        settext(text.toUpperCase())
        
    }
    const handleLower = () =>{
        settext(text.toLowerCase())
    }
    const textChange = (event) =>{
        settext(event.target.value)
    }
    const copyBtn=()=>{
      navigator.clipboard.writeText(text);
    }
    const handleClr = () =>{
      settext('')
    }
    const handleSpace = ()=>{
      settext(text.trim().split(/[ ]+/g).join(" "))
    }

  return (
    <>
<div className="container mb-3">
    <h1>Enter Text</h1>
  <textarea value={text} onChange={textChange} className="form-control" id="maintextForm" rows="3"></textarea>
  <span>Characters : {text.split('').filter(f=>f!==' ').length}</span> <span>Words : {text.trim().split(' ').filter(f=>f!==" "  && f!=="").length}</span><br/>
<button className="btn btn-primary m-1" onClick={handleUpper} >UpperCase</button>
<button className="btn btn-primary m-1" onClick={handleLower} >LowerCase</button>
<button className="btn btn-primary m-1" onClick={handleSpace} >Remove Extra Spaces</button>
<button className="btn btn-primary m-1" onClick={copyBtn} >Copy</button>
<button className="btn btn-primary m-1" onClick={handleClr} >Clear</button>
</div>
    </>
  )
}

export default TextForm