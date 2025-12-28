const StartGame = ({ setPlayGame }) => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div>
          <img src="/images/dices.png" alt="diceimage" />
        </div>
        <div className="flex flex-col items-end gap-5">
          <h1 className="text-7xl whitespace-nowrap font-bold">DICE GAME</h1>
          <button
            onClick={() => {
              setPlayGame(true);
            }}
            className="bg-black text-white py-1 w-40 rounded-sm cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-black transition delay-150 duration-300 ease-in-out"
          >
            Play Now
          </button>
        </div>
      </section>
    </>
  );
};

export default StartGame;
