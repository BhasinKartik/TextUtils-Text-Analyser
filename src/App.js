import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import react, { useState } from 'react';


function App() {
  // const [darkMode,setdarkMode]=useState(false);
  const [mode,setMode]=useState('light');
  const [switchED,EDswitch]=useState('DarkMode');
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
setAlert(
  {
    msg:message,
type:type
  }
)
setTimeout(()=>{
setAlert(null);
},1000)
}
  const toggleMode=()=>{
if(mode==='dark'){
  setMode('light');
  document.body.style.backgroundColor='white';
  EDswitch('DarkMode');
  showAlert("Light Mode Enabled","success");
}
else{
  setMode('dark');
  document.body.style.backgroundColor='#2f2a4b';
EDswitch('LightMode');
showAlert("Dark Mode Enabled","success");

}
  }

  return (
   
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switchED={switchED}/>
    <Alert alert={alert}/>
<div className="container" >
<TextForm heading="Enter Text Here" mode={mode} toggleMode={toggleMode}/>
<About/>
</div>

  </>
  
  );

  }
export default App;
