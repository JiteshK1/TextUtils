import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [NavText, setNavText] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {

    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setNavText('Disable Dark Mode')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode Enabled', 'success')
    } else {
      setmode("light");
      setNavText('Enable Dark Mode')
      document.body.style.backgroundColor = 'White'
      showAlert('Dark Mode Disabled', 'success')



    }

  };
  return (
    <>
      <Navbar
        title="TextUtile"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        NavText={NavText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
