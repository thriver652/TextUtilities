import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
// import About from "./components/About";
import TextForm from "./components/textform";
import Alert from "./components/Alert";
// import './components/navbar/index.css';

function App() {
  const colorMode = (value) => {
    console.log(value + "clicked");
    setStyles({
      color: "white",
      backgroundColor: value,
    });
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  // let color1=true;
  // if(modex==='dark')
  // color1=false;
  const toggleMode = () => {
    if (modex === "light") {
      // color1=true;
      setMode("dark");
      setText({
        text1: "Enable Light Mode",
        textColor: "light",
      });
      setStyles({
        color: "white",
        backgroundColor: "#213555",
      });
      showAlert("Dark Mode Enabled", "success");
    } else {
      //  color1 =false;
      setMode("light");
      setText({
        text1: "Enable Dark Mode",
        textColor: "dark",
      });

      setStyles({
        color: "black",
        backgroundColor: "white",
      });
      showAlert("Light Mode Enabled", "success");
    }
  };
  const [modex, setMode] = useState("light");
  const [text1, setText] = useState({
    text1: "Enable Dark Mode",
    textColor: "dark",
  });
  const [makeStyles, setStyles] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const styles1 = {
    backgroundColor: "white",
  };
  const styles2 = {
    backgroundColor: "grey",
    color: "white",
  };
  const [alert, setAlert] = useState(null);
  return (
    <div className="App" style={makeStyles}>
      <div className="blank">
        <Navbar
          title="Sai Praneeth"
          home="Home"
          mode={modex}
          color={modex}
          fun={toggleMode}
          text={text1.text1}
          colors={text1.textColor}
          colorMode={colorMode}
          backgroundColor={modex === "dark" ? false : true}
          // selectedColor={selectedColor}
        ></Navbar>
        <Alert alert={alert} />
        <TextForm
          showAlert={showAlert}
          makeStyles={makeStyles}
          styles={modex === "light" ? styles1 : styles2}
        />
      </div>
    </div>
  );
}

export default App;
