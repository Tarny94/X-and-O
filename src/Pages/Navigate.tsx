import React from "react";
import Game from "./game";
import { Route, Routes } from "react-router-dom";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  );
};

export default Navigate;