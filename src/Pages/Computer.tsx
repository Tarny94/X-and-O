import React, { useState, useEffect } from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import "../style/styles.scss";

const Computer = () => {
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
  const [clickNr, setClickNr] = useState(0);
  const [isdraw, setIsdraw] = useState(false);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [whoWin, setWhoWin] = useState("");

  const x = "❌";
  const zero = "⭕";
  const navigate = useNavigate();

  const checkIfWin = () => {
    if (buttonOne === buttonTwo && buttonOne === buttonThree) {
      return true;
    } else if (buttonOne === buttonFour && buttonOne === buttonSeven) {
      return true;
    } else if (buttonOne === buttonFive && buttonOne === buttonNine) {
      return true;
    } else if (buttonTwo === buttonFive && buttonTwo === buttonEight) {
      return true;
    } else if (buttonThree === buttonFive && buttonThree === buttonSeven) {
      return true;
    } else if (buttonThree === buttonSix && buttonThree === buttonNine) {
      return true;
    } else if (buttonSix === buttonFive && buttonSix === buttonFour) {
      return true;
    } else if (buttonNine === buttonEight && buttonNine === buttonSeven) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (istrue) {
      setWhoWin(x);
      return setTurn(`It's ${x} round...`);
    }
    setTurn(`It's ${zero} round...`);
    setWhoWin(zero);
  }, [istrue]);

  useEffect(() => {
    if (checkIfWin()) {
      if (istrue) {
        setXScore(xScore + 1);
      } else {
        setOScore(oScore + 1);
      }
    }
  }, [checkIfWin()]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  const checkifDraw = () => {
    if (clickNr === 9) {
      setIsdraw(true);
    }
  };

  const PerformZero = () => {
    checkIfWin();
    checkifDraw();

    let timer = Math.floor(Math.random() * 2000) + 500;

    if (clickNr % 2 !== 0) {
      setIstrue(false);
      setTimeout(() => {
        chooseComputer();
      }, timer);
    } else if (clickNr % 2 === 0) {
      setIstrue(true);
    }
  };

  useEffect(() => {
    if (!checkIfWin()) {
      PerformZero();
    } else {
      return;
    }
  }, [clickNr]);

  const setValueInterval = (button: any) => {
    checkIfWin();
    button(zero);
    if (!checkIfWin()) {
      setClickNr(clickNr + 1);
    }
  };

  const chooseComputer = () => {
    if (!checkIfWin()) {
      verification();
    } else {
      return "";
    }
  };

  const verification = () => {
    if (!checkIfWin() && clickNr < 9) {
      let num = getRandomNumber();
      console.log(" randmo: ", num);

      if (num === 1) {
        checkIfClicked(buttonOne)
          ? verification()
          : setValueInterval(setButtonOne);
      } else if (num === 2) {
        checkIfClicked(buttonTwo)
          ? verification()
          : setValueInterval(setButtonTwo);
      } else if (num === 3) {
        checkIfClicked(buttonThree)
          ? verification()
          : setValueInterval(setButtonThree);
      } else if (num === 4) {
        checkIfClicked(buttonFour)
          ? verification()
          : setValueInterval(setButtonFour);
      } else if (num === 5) {
        checkIfClicked(buttonFive)
          ? verification()
          : setValueInterval(setButtonFive);
      } else if (num === 6) {
        checkIfClicked(buttonSix)
          ? verification()
          : setValueInterval(setButtonSix);
      } else if (num === 7) {
        checkIfClicked(buttonSeven)
          ? verification()
          : setValueInterval(setButtonSeven);
      } else if (num === 8) {
        checkIfClicked(buttonEight)
          ? verification()
          : setValueInterval(setButtonEight);
      } else if (num === 9) {
        checkIfClicked(buttonNine)
          ? verification()
          : setValueInterval(setButtonNine);
      }
    }
  };

  const checkIfClicked = (button: any) => {
    if (button === x || button === zero) {
      return true;
    }
    return false;
  };

  const handleButton = (button: any) => {
    if (!istrue) {
      return "";
    }
    checkIfWin();
    if (!checkIfWin()) {
      if (istrue) {
        button(x);
      }
      setClickNr(clickNr + 1);
    }
  };

  const winner = () => {
    let winners = `🎊 ${whoWin} Wins!`;
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
    setClickNr(0);
    setIsdraw(false);
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
        {checkIfWin() ? winner() : isDraw()}
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
        <div
          className="reset"
          title="Back to first page"
          onClick={() => {
            navigate("/");
          }}
        >
          ⬅️
        </div>
        <div className="reset" title="Reset game" onClick={handleReset}>
          🔃
        </div>
      </div>
      <div className="about-container">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQFcHRAARTK6og/profile-displayphoto-shrink_100_100/0/1656096006478?e=1671062400&v=beta&t=aB33V7zSs75m48sh6luBJtvqxctSkPKKIld6hZr8ixw"
          alt="Profile"
          width="50px"
          height="50px"
        />
        <p className="about-message">Created by Tarnicer Alexandru </p>
      </div>
    </div>
  );
};

export default Computer;
