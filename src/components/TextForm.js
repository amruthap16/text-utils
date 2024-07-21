import React , {useState} from 'react'
 
export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
       console.log("Lowercase was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText)
    }  
    const handleClearClick =()=>{
      //console.log("Lowercase was clicked" + text);
      let newText = '';
      setText(newText)
   } 
  
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    // const handleCopy=() =>{
    //   var text=document.getElementById("my box");
    //   text.select();
    //   navigator.clipboard.writeText(text.value);
    // }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        
       
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and{text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )

}
    

