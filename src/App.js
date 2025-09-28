import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [darkModeColor, setDarkModeColor] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log(darkModeColor);
      document.body.style.backgroundColor = darkModeColor;
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      console.log(darkModeColor);
      document.body.style.backgroundColor = darkModeColor;
      showAlert("Light mode has been enabled", "success");
    }
  };

  const handleDarkMode = (newMode, color) => {
    console.log(newMode);
    if (newMode === "light") {
      setDarkModeColor(color);
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = color;
      console.log(color);
    } else {
      setDarkModeColor(color);
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = color;
      console.log(color);
    }
  };

  return (
    <>
      <Navbar
        title="TextUtilityWhalee"
        aboutText="About Us"
        mode={mode}
        handleToggleMode={handleToggleMode}
        handleDarkMode={handleDarkMode}
        setDarkModeColor={setDarkModeColor}
        darkModeColor={darkModeColor}
      />

      <div className="container my-3">
        <Alert alert={alert} />
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
