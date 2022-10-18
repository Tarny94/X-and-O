import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/styles.scss";
import Title from "./Title";

const StartPage = ({ setPlayPlayer }: any) => {
  const navigate = useNavigate();

  return (
    <>
      <Title />
      <div className="start-page-container">
        <div className="choose">
          <span
            className="choose-1vs1 choose-button"
            title="Player vs Player"
            onClick={() => {
              setPlayPlayer(true);
              navigate("/computer");
            }}
          >
            🎭{" "}
          </span>
          <span
            className="choose-pc choose-button"
            title="Player vs Computer"
            onClick={() => {
              setPlayPlayer(false);
              navigate("/computer");
            }}
          >
            💻
          </span>
        </div>
      </div>
    </>
  );
};

export default StartPage;
