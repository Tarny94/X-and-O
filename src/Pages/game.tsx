import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";
import Title from "../Pages/Title";
import "../style/styles.scss";

const Game = () => {
  const [buttonOne, setButtonOne] = useState("😁");
  const [buttonTwo, setButtonTwo] = useState("🌞");
  const [buttonThree, setButtonThree] = useState("😎");
  const [buttonFour, setButtonFour] = useState("😉");
  const [buttonFive, setButtonFive] = useState("😊");
  const [buttonSix, setButtonSix] = useState("😋");
  const [buttonSeven, setButtonSeven] = useState("😏");
  const [buttonEight, setButtonEight] = useState("😧");
  const [buttonNine, setButtonNine] = useState("😯");
  const [turn, setTurn] = useState(``);
  const [istrue, setIstrue] = useState(true);
  const [wins, setWins] = useState(false);
  const [clickNr, setClickNr] = useState(0);
  const [isdraw, setIsdraw] = useState(false);

  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const x = "❌";
  const zero = "⭕";

  useEffect(() => {
    checkIfWin();
    if (istrue) {
      return setTurn(`It's ${x} round...`);
    }
    return setTurn(`It's ${zero} round...`);
  }, [istrue]);

  useEffect(() => {
    if (wins) {
      if (istrue) {
        setOScore(oScore + 1);
      } else {
        setXScore(xScore + 1);
      }
    }
  }, [wins]);

  const checkIfClicked = (button: any) => {
    if (button === x || button === zero) {
      return true;
    }
    return false;
  };

  const handleButton = (button: any) => {
    setClickNr(clickNr + 1);
    if (clickNr === 8) {
      setIsdraw(true);
    }

    if (istrue) {
      button(x);

      setIstrue(false);
    } else {
      button(zero);

      setIstrue(true);
    }
  };

  const winner = () => {
    let winners = `🎊 ${!istrue ? x : zero} Wins!`;
    return (
      <div className="winner-container">
        <div className="winner" onClick={handleReset}>
          {winners}
        </div>
      </div>
    );
  };

  const isDraw = () => {
    if (isdraw) {
      return (
        <div className="winner-container">
          <div className="winner" onClick={handleReset}>
            Draw 😧
          </div>
        </div>
      );
    }
  };

  const handleReset = () => {
    setButtonOne("😉");
    setButtonTwo("🌞");
    setButtonThree("😁");
    setButtonFour("😎");
    setButtonFive("😊");
    setButtonSix("😉");
    setButtonSeven("😏");
    setButtonEight("😧");
    setButtonNine("😎");
    setIstrue(true);
    setWins(false);
    setClickNr(0);
    setIsdraw(false);
  };

  const checkIfWin = () => {
    if (buttonOne === buttonTwo && buttonOne === buttonThree) {
      return setWins(true);
    } else if (buttonOne === buttonFour && buttonOne === buttonSeven) {
      return setWins(true);
    } else if (buttonOne === buttonFive && buttonOne === buttonNine) {
      return setWins(true);
    } else if (buttonTwo === buttonFive && buttonTwo === buttonEight) {
      return setWins(true);
    } else if (buttonThree === buttonFive && buttonThree === buttonSeven) {
      return setWins(true);
    } else if (buttonThree === buttonSix && buttonThree === buttonNine) {
      return setWins(true);
    } else if (buttonSix === buttonFive && buttonSix === buttonFour) {
      return setWins(true);
    } else if (buttonNine === buttonEight && buttonNine === buttonSeven) {
      return setWins(true);
    }
  };

  return (
    <div className="App">
      <Title
        xScore={xScore}
        oScore={oScore}
        setScore={() => {
          setOScore(0);
          setXScore(0);
        }}
      />
      <div className="round-container">{turn}</div>

      <div className="container">
        {wins ? winner() : isDraw()}
        <div
          className="button button1"
          onClick={() => {
            if (checkIfClicked(buttonOne)) {
              return "";
            }
            handleButton(setButtonOne);
          }}
        >
          {buttonOne}
        </div>
        <div
          className="button button2"
          onClick={() => {
            if (checkIfClicked(buttonTwo)) {
              return "";
            }
            handleButton(setButtonTwo);
          }}
        >
          {buttonTwo}
        </div>
        <div
          className="button button3"
          onClick={() => {
            if (checkIfClicked(buttonThree)) {
              return "";
            }
            handleButton(setButtonThree);
          }}
        >
          {buttonThree}
        </div>
        <div
          className="button button4"
          onClick={() => {
            if (checkIfClicked(buttonFour)) {
              return "";
            }
            handleButton(setButtonFour);
          }}
        >
          {buttonFour}
        </div>
        <div
          className="button button5"
          onClick={() => {
            if (checkIfClicked(buttonFive)) {
              return "";
            }
            handleButton(setButtonFive);
          }}
        >
          {buttonFive}
        </div>
        <div
          className="button button6"
          onClick={() => {
            if (checkIfClicked(buttonSix)) {
              return "";
            }
            handleButton(setButtonSix);
          }}
        >
          {buttonSix}
        </div>
        <div
          className="button button7"
          onClick={() => {
            if (checkIfClicked(buttonSeven)) {
              return "";
            }
            handleButton(setButtonSeven);
          }}
        >
          {buttonSeven}
        </div>
        <div
          className="button button8"
          onClick={() => {
            if (checkIfClicked(buttonEight)) {
              return "";
            }
            handleButton(setButtonEight);
          }}
        >
          {buttonEight}
        </div>
        <div
          className="button button9"
          onClick={() => {
            if (checkIfClicked(buttonNine)) {
              return "";
            }
            handleButton(setButtonNine);
          }}
        >
          {buttonNine}
        </div>
      </div>
      <div className="reset-button">
        <div className="reset" onClick={handleReset}>
          🔃
        </div>
      </div>
    </div>
  );
};

export default Game;
