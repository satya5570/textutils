
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    // <div className="blank">Lovely</div>

    <>
      {/* <Navbar title="textutils" about="About" /> */}
      {/* <Router> */}
        <Navbar title="textutils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
             

            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            
          {/* </Routes> */}
        </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
