import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content-center">
        <Main />
      </div>
    </div>
  );
}

export default App;
