import React from "react";
import "../style/styles.scss";

const Title = ({ xScore, oScore, setScore }: any) => {
  return (
    <div className="title-container">
      <h2 className="score score-x">{xScore}</h2>
      <div>
        <h1 className="title" onClick={setScore}>
          ❌ and ⭕<p className="help-text">Press click to reset the score</p>
        </h1>
      </div>
      <h2 className="score score-o">{oScore}</h2>
    </div>
  );
};

export default Title;
