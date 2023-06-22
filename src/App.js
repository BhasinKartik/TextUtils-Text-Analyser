import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {
  const [darkMode,setdarkMode]=useState(false);
  const [mode,setMode]=useState('dark');
  const [switchED,EDswitch]=useState('DarkMode');

  const toggleMode=()=>{
if(mode==='dark'){
  setMode('light');
  document.body.style.backgroundColor='white';
  EDswitch('DarkMode');
}
else{
  setMode('dark');
  document.body.style.backgroundColor='#2f2a4b';
EDswitch('LightMode');
}
  }

  return (
    <>
    {/* // <Navbar></Navbar> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switchED={switchED}/>
<div className="container" >
<TextForm heading="Enter Text Here" mode={mode} toggleMode={toggleMode}/>;
{/* <About/> */}
</div>
    
    </>
  
  );
}

export default App;
