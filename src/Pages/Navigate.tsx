import React, { useState } from "react";
import Computer from "./Computer";
import StartPage from "./start";
import { Route, Routes } from "react-router-dom";

const Navigate = () => {
  const [playPlayer, setPlayPlayer] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<StartPage setPlayPlayer={setPlayPlayer} />} />
      <Route path="/computer" element={<Computer playPlayer={playPlayer} />} />
    </Routes>
  );
};

export default Navigate;
