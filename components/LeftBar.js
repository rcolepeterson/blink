const LeftBar = ({ score = "2,390,927" }) => {
  const logo = "/logo.png";
  return (
    <div className="left-bar">
      <img src={logo} alt="logo" />
      <div className="mt-10">
        <h1 className="uppercase">Don&apos;t Break</h1>
        <h1 className="uppercase">For a break</h1>
      </div>
      <div className="mt-10">
        <h4 className="">Current Score</h4>
        <h2 className="">{score.toLocaleString("en-US")}</h2>
      </div>

      <div className="mt-6">
        <h4 className="">Level</h4>
        <h2 className="">9</h2>
      </div>
      <div className="mt-6">
        <h4 className="">International Ranking:</h4>
        <h2 className="">3,892</h2>
      </div>
    </div>
  );
};

export default LeftBar;
