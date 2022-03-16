import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";;

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
      <Router>
        <div className="container">

          <Navbar
            title="TextUtile"
            aboutText="About TextUtils"
            mode={mode}
            toggleMode={toggleMode}
            NavText={NavText}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/About" element={<About mode={mode} />}></Route>
              <Route
                exact
                path="/"
                element={
                  <TextForm heading="Enter text" mode={mode} />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
