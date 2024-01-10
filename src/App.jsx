/* eslint-disable no-unused-vars */
import { useState } from "react";
import first from "./img/first.png";
import two from "./img/two.png";
import three from "./img/three.png";
import four from "./img/four.png";
import five from "./img/five.png";
import six from "./img/six.png";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [roll, setRoll] = useState(null);
  const [reset, setReset] = useState(true);
  const [hold, setHold] = useState(false);
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [totalScorePlayer1, setTotalScorePlayer1] = useState(0);
  const [totalScorePlayer2, setTotalScorePlayer2] = useState(0);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);

  function handleReset() {
    setReset(true);
    setRoll(null);
    setIsShow(false);
    setCurrent1(0);
    setCurrent2(0);
    setTotalScorePlayer1(0);
    setTotalScorePlayer2(0);
    setIsPlayer1Turn(true);
  }

  function handleSubmit() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    if (diceRoll === 1) {
      setRoll(1);
      setCurrent1(0);
      setCurrent2(0);
      setIsPlayer1Turn(!isPlayer1Turn);
    } else {
      if (isPlayer1Turn) {
        setCurrent1((prevCurrent1) => prevCurrent1 + diceRoll);
      } else {
        setCurrent2((prevCurrent2) => prevCurrent2 + diceRoll);
      }
      setRoll(diceRoll);
    }
  }

  function handleHold() {
    setHold(true);
    setIsPlayer1Turn(!isPlayer1Turn);

    if (isPlayer1Turn) {
      setTotalScorePlayer1((prevTotalScore1) => prevTotalScore1 + current1);
      setCurrent1(0);
    } else {
      setTotalScorePlayer2((prevTotalScore2) => prevTotalScore2 + current2);
      setCurrent2(0);
    }
  }

  return (
    <div className="max-w-screen-lg mx-auto relative ">
      <div className="flex flex-row justify-center  ">
        <div className="absolute bg-white rounded-full p-4 uppercase bottom-60 opacity-95 text-lg ">
          <button className="uppercase" onClick={handleSubmit}>
            🎲 Roll dice
          </button>
        </div>
        <div className="absolute bg-white rounded-full p-4 uppercase top-10 opacity-95 text-xl">
          <button className="uppercase" onClick={handleReset}>
            🔃 New game
          </button>
        </div>

        {!isShow && roll !== null && (
          <div className="absolute size-24 top-36">
            {roll === 1 ? <img src={first} alt="1" /> : ""}
            {roll === 2 ? <img src={two} alt="2" /> : ""}
            {roll === 3 ? <img src={three} alt="3" /> : ""}
            {roll === 4 ? <img src={four} alt="4" /> : ""}
            {roll === 5 ? <img src={five} alt="5" /> : ""}
            {roll === 6 ? <img src={six} alt="6" /> : ""}
          </div>
        )}

        <div
          className={`${
            (isPlayer1Turn && totalScorePlayer1 >= 100) ||
            (!isPlayer1Turn && totalScorePlayer1 >= 100)
              ? "bg-slate-700"
              : isPlayer1Turn
              ? "bg-sky-500"
              : "bg-sky-700"
          } p-[9rem] flex flex-col items-center rounded-lg
          `}
        >
          <h1 className="uppercase text-4xl font-semibold text-black">
            Player 1
          </h1>
          <p className="text-5xl pt-8 pb-20 font-semibold text-white">
            {totalScorePlayer1}
          </p>
          <div
            className={`flex flex-col ${
              isPlayer1Turn ? "bg-sky-600" : "bg-sky-800"
            } rounded-lg py-10 px-20 items-center gap-4`}
          >
            <p className="uppercase text-white text-light">Current</p>
            <p className="text-4xl text-white ">{current1}</p>
          </div>
        </div>

        <div className="absolute bg-white rounded-full p-4 uppercase opacity-95 bottom-40 text-lg">
          <button className="uppercase" onClick={handleHold}>
            ⬇️ Hold
          </button>
        </div>

        <div
          className={` ${
            (isPlayer1Turn && totalScorePlayer1 >= 100) ||
            (!isPlayer1Turn && totalScorePlayer1 >= 100)
              ? "bg-slate-700"
              : isPlayer1Turn
              ? "bg-sky-700"
              : "bg-sky-500"
          } p-[9rem] flex flex-col items-center rounded-lg`}
        >
          <h1 className="uppercase text-4xl font-semibold text-black">
            Player 2
          </h1>
          <p className="text-5xl pt-8 pb-20 font-semibold text-white">
            {totalScorePlayer2}
          </p>
          <div
            className={`flex flex-col ${
              isPlayer1Turn ? "bg-sky-800" : "bg-sky-600"
            } rounded-lg py-10 px-20 items-center gap-4`}
          >
            <p className="uppercase text-white text-light">current</p>
            <p className="text-4xl text-white">{current2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
