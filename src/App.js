import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="">
          <div className="col-sm-10 col-md-8 col-xl-6">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
