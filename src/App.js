import './App.css';
import React, { useState } from "react";
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(7 20 47)';
      showAlert('Dark mode enabled', 'success');
      document.title = 'Textutils-dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
      document.title = 'Textutils-light mode';
    }
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  return (<>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className= "container my-3">
        {/* <Routes> */}
          {/* <Route path="/" element={}/>
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes> */}
        <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
    {/* /* </BrowserRouter> */ }
    </>
  );
}export default App;

    /* <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
        <Routes>
      <div className="container my-3">
          <Route path="/" >
            <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
      </div>
        </Routes>
    </Router> */
 
  
/* /* <Routes>
<Route exact path='/' element={< Home />}></Route>
<Route exact path='/about' element={< About />}></Route>
<Route exact path='/contact' element={< Contact />}></Route>
</Routes>
</div>
// </Router> */ 
