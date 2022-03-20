import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const [colour,setColour] = useState("");
    
     const handleUpClick=()=>{
      let newText = text.toUpperCase();
     setText(newText);
     props.showAlert('Converted to Upper case',"Success");
    }

     const clearText=()=>{ 
     setText('');
     props.showAlert('Text cleared');
    }

     const handleLoClick=()=>{
      let newText = text.toLowerCase();
     setText(newText);
     props.showAlert('Converted to Lower case',"Success");
    }
     const handleClick=(event)=>{
      setText(event.target.value);
    }

    const changeColour=()=>{
setColour('orange');
    }

  return (
    <> 
     <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="myBox" class="form-label">{props.heading}</label> */}
    <textarea className="form-control mx-2" onChange={handleClick} id="myBox" style={{backgroundColor: props.mode==='light'?'white':'grey'}}
    value={text} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-3"  onClick={handleUpClick}>Convert to Upper Case</button>
   <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lower Case</button>
   <button className="btn btn-primary mx-3" onClick={clearText}>clearText</button>
   <button className="btn btn-primary mx-3" onClick={changeColour}>Change Colour </button>
     </div>
     <div className="container my-10" style={{color: props.mode==='light'?'black':'white'}}>
         <h1>Your summary</h1>
         <p>{text.split(' ').length-1} word and {text.length}characters</p>
         <p>{(0.008 * text.split(' ').length)} - Minutes read </p>
         <h2>Preview</h2>
         <p>{text.length>0 ? text:"Enter someting to preview"}</p>
     </div>
     </>
  )
}
