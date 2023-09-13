import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

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
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(16 93 109)";
      showAlert("Dark Mode Enabled", "Success");
      document.title = "Text Utilis -Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Text Utilis -Home";
    }
  };
  return (
    <Router>
      <>
        <Navbar
          title="Text-Utils"
          home="Home"
          about="About"
          contact="Contact-Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                title="Enter your text here"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}>
            {" "}
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
