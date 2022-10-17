import React from "react";
import Game from "./game";
import Computer from "./Computer";
import StartPage from "./start";
import { Route, Routes } from "react-router-dom";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<Game />} />
      <Route path="/computer" element={<Computer />} />
    </Routes>
  );
};

export default Navigate;
