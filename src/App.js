import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setmode] = useState("light");
  const [NavText, setNavText] = useState('Enable Dark Mode')
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setNavText('Disable Dark Mode')
      document.body.style.backgroundColor = '#042743'
    } else {
      setmode("light");
      setNavText('Enable Dark Mode')
      document.body.style.backgroundColor = 'White'


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
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
