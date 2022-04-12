import React, { useState , useRef } from "react";

const Dictionary = () => {
  const [Word, setWord] = useState("");
  const header = useRef(null);
  const desc = useRef(null);
  const handleChange = (event) => {
     setWord(event.target.value);
    };
    
    const fetchWord = async () => {
        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`)
        .then((data) => data.json());
        console.log(data)
        header.current.innerText = `Word : ${data[0].word}` ; 
        desc.current.innerText = `Defination : ${data[0].meanings[0].definitions[0].definition}` ;
  };

  return (
    <>
      <div className="container form-group my-5 p-2">
        <input
          type="text"
          className="form-control"
          id="wordInput"
          placeholder="Enter Word"
          value={Word}
          onChange={handleChange}
        />
        <button className="btn btn-primary m-2 w-25" onClick={fetchWord}>
          Fetch
        </button>

        <div className="my-5 py-1">
          <div className="card">
            <div className="card-header">Word Meaning</div>
            <div className="card-body">
              <h5 className="card-title" ref={header}>Enter some Words</h5>
              <p className="card-text" ref={desc}>
                all the content will be shown here after fetching word
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dictionary;
