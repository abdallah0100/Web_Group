import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/content/Content";

function App() {
  //a variable to store what to show in the content component
  const [content, setContent] = useState([]);
  let x;
  return (
    <div>
      <NavBar setContent={setContent} />
      <Content content={content} />
    </div>
  );
}

export default App;
