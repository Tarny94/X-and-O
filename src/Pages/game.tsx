import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
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

  const [istrue, setIstrue] = useState(true);
  const [disable, setDisable] = useState(false);

  const x = "❌";
  const zero = "⭕";

  // Task

  // 1- Create Title Page and style
  // 2- Create Macth round and style
  // 3- Create Logic for Match rount
  // 4- Create Reset button and style
  // 5- Add function handleReset
  // 6- Create finish Page and style
  // 7- Add function for checkIfWin
  // 8- Add props to finish Page
  // 9- Check if program work!!!

  const checkIfClicked = (button: any) => {
    if (button === x || button === zero) {
      return true;
    }
    return false;
  };

  const handleButton = (button: any) => {
    if (istrue) {
      button(x);
      setIstrue(false);
    } else {
      button(zero);
      setIstrue(true);
    }
  };

  return (
    <div className="App">
      <div className="container">
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
    </div>
  );
};

export default Game;
