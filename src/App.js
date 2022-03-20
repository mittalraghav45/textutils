import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
    })
    setTimeout(()=>{
setAlert(null)
    },3000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled", 'success')
    }
else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled", 'success')
    }
  }
  return (
    <> 
    <Router> 
  <Navbar title="Raghav" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    <Routes>  
       <Route path="/about" element={<About/>}> 
      </Route>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text" mode={mode}/>}>
    </Route>
    </Routes>
  </div>
  </Router>
  </>

  );
}

export default App;
