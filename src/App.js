import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // },1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // },1500);
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text to Analyze"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

