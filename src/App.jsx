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

  function handleReset() {
    setReset();
    setRoll(null);
    setIsShow(false);
  }

  function handleSubmit() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    setRoll(diceRoll);
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

        <div className=" bg-sky-500 p-[9rem] flex flex-col items-center rounded-lg">
          <h1 className="uppercase text-4xl font-semibold text-black">
            Player 1
          </h1>
          <p className="text-5xl pt-8 pb-20 font-semibold text-white">0</p>
          <div className="flex flex-col bg-sky-600 rounded-lg p-10 items-center gap-4">
            <p className="uppercase text-white text-light">Current</p>
            <p className="text-4xl text-white ">0</p>
          </div>
        </div>

        <div className="absolute bg-white rounded-full p-4 uppercase opacity-95 bottom-40 text-lg">
          <button className="uppercase">⬇️ Hold</button>
        </div>

        <div className=" bg-sky-600 p-[9rem] flex flex-col items-center rounded-lg">
          <h1 className="uppercase text-4xl font-semibold text-black">
            Player 2
          </h1>
          <p className="text-5xl pt-8 pb-20 font-semibold text-white">0</p>
          <div className="flex flex-col bg-sky-700 rounded-lg p-10 items-center gap-4">
            <p className="uppercase text-white text-light">Current</p>
            <p className="text-4xl text-white">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
