const LeftBar = ({ score = "2,390,927", level = "1", ranking = "0" }) => {
  const logo = "/logo.png";
  return (
    <div className="flex pt-6 gap-20 numbers">
      <div>
        <h5 className="">Current Score:</h5>
        <h2 className="text-center">{score.toLocaleString("en-US")}</h2>
      </div>

      <div>
        <h5 className="">Level:</h5>
        <h2 className="text-center">{level}</h2>
      </div>
      {/* <div className="mt-6">
        <h4 className="">International Ranking:</h4>
        <h2 className="">{ranking}</h2>
      </div> */}
    </div>
  );
};

export default LeftBar;
