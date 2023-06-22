import React,{useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState('');
const handleUpClick=()=>{
  // console.log("Button Clicked "+ text) 
  let newText=text.toUpperCase();
  setText(newText);

}
const handleLowClick=()=>{
  // console.log("Button Clicked "+ text)
  let newText=text.toLowerCase();
  setText(newText);

}
const handleOnChange=(event)=>{
  setText(event.target.value);
}
const clearText=()=>{
  setText('');
}
const copyText=()=>{
  var txt=document.getElementById("myBox");
  txt.select();
  navigator.clipboard.writeText(txt.value);
}
const handleExtraSpaces=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "));

// WRONG :
// var txt=document.getElementById("myBox");
// txt.value=text;
// setText(txt.value);
}
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea className="form-control mx-2 my-2"style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary" onClick={clearText} >Clear Text</button>
<button className="btn btn-primary" onClick={handleLowClick} >Convert to LowerCase</button>
<button className="btn btn-primary" onClick={handleExtraSpaces} >Remove extra paces</button>
<button className="btn btn-primary" onClick={copyText} >Copy Text</button>
    </div>
    <div className="cntainer my-2 " style={{color:props.mode==='dark'?'white':'black'}}>
<h1>Text Summary</h1>
<p>{(text.length) ? text.split(" ").length : 0} words and {text.length} characters</p>
<div className="container">
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </div>
    
    </>
  )
}
