import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/content/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
