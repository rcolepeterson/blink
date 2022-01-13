const LeftBar = ({ score = "2,390,927", level = "1", ranking = "0" }) => {
  const logo = "/logo.png";
  return (
    <div className="left-bar">
      <img src={logo} alt="logo" />
      <div className="mt-2 shadRed">
        <h1 className="uppercase">Don&apos;t Break</h1>
        <h1 className="uppercase -mt-3">Get a break</h1>
        <p className="w-[360px] text-xl leading-6 pt-6">
          Introducing the world’s first international staring contest. Survive
          all 10 rounds without blinking to win a free Kit Kat.
        </p>
      </div>
      <div className="mt-10">
        <h4 className="">Current Score:</h4>
        <h2 className="">{score.toLocaleString("en-US")}</h2>
      </div>

      <div className="mt-6">
        <h4 className="">Level:</h4>
        <h2 className="">{level}</h2>
      </div>
      <div className="mt-6">
        <h4 className="">International Ranking:</h4>
        <h2 className="">{ranking}</h2>
      </div>
    </div>
  );
};

export default LeftBar;
