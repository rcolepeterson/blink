const LeftBar = () => {
  const logo = "/logo.png";
  return (
    <div className="left-bar">
      <img src={logo} alt="logo" />
      <div className="mt-10">
        <h1 className="uppercase">Don't Break</h1>
        <h1 className="uppercase">For a break</h1>
      </div>
      <div className="mt-10">
        <h4 className="">Current Score</h4>
        <h2 className="">2,390,928</h2>
      </div>

      <div className="mt-6">
        <h4 className="">Round</h4>
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
