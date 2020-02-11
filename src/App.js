import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
