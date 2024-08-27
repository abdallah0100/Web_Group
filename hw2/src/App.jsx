import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/content/Content";
import { BrowserRouter } from "react-router-dom";

// Main application component
function App() {
  return (
    <div>
      {/* BrowserRouter wraps the application to enable routing */}
      <BrowserRouter>
        {/* NavBar component */}
        <NavBar />
        {/* Content component */}
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
