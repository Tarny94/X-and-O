import React from "react";
import Navigate from "./Pages/Navigate";
import "./style/styles.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  );
}

export default App;
