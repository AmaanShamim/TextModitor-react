import "./App.css";
import React, { useState } from "react";
import Input from "./Components/Input";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); // Whether dark mode is enabled or not.
  const [alert, setalert] = useState(null); // Sends alerts to user on interaction.

  const showAlert = (type, message) => {
    setalert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 1700);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e2948";
      document.body.style.color = "White";
      showAlert("success", "Switched to Darkmode <3");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      document.body.style.color = "Black";
      showAlert("success", "Switched to Lightmode <3");
    }
  };

  return (
    <>
      <Router basename="/textmoditor-react">
        <Navbar title="Text moditor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container-fluid">
                <Input showAlert={showAlert} mode={mode} />
              </div>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <div className="container-fluid">
                <About mode={mode} />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
