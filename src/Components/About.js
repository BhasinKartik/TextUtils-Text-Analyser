import React,{useState} from 'react'

export default function About() {
  const [myStyle,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black'
  })
  const [btntext,setBtnText]=useState('Enable dark mode')
  const toggleStyle=()=>{
    if(myStyle.color=='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:'2px solid black'
      });
setBtnText('Enable dark mode');
    }
    else{
      setMyStyle({
        color:'white',
    backgroundColor:'black',
    border:'2px solid white'
      })

setBtnText('Enable light mode');
    }
  }
  return (
    <>
    <div className="container my-2" style={myStyle}>
        <h1 className="my-3">About</h1>
        <div className="accordion" id="accordionExample">
  <div classname="accordion-item">
    <h2 classname="accordion-header" id="headingOne">
      <button classname="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" classname="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div classname="accordion-item">
    <h2 classname="accordion-header" id="headingTwo">
      <button classname="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
      </h2>     
    <div id="collapseTwo" classname="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div classname="accordion-item">
    <h2 classname="accordion-header" id="headingThree">
      <button classname="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" classname="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      <div className="container">
<button className="btn btn-primary mx-2 my-2 "onClick={toggleStyle} >{btntext}</button>

      </div>
    </div>
    </>

  )
}
