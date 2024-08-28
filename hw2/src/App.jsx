import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/content/Content";
import Footer from "./components/content/Footer"
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
