import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/styles.scss";
import Title from "./Title";

const StartPage = () => {
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
              navigate("/game");
            }}
          >
            🎭{" "}
          </span>
          <span
            className="choose-pc choose-button"
            title="Player vs Computer"
            onClick={() => {
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
