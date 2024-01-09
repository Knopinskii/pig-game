function App() {
  return (
    <div className="max-w-screen-lg mx-auto relative ">
      <div className="flex flex-row justify-center  ">
        <div className="absolute bg-white rounded-full p-4 uppercase top-10 opacity-95 text-xl">
          <button className="uppercase">🔃 New game</button>
        </div>

        <div>
          <img src="1" alt="1" />
        </div>

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
        <div className="absolute bg-white rounded-full p-4 uppercase bottom-60 opacity-95 text-lg ">
          <button className="uppercase">🎲 Roll dice</button>
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
