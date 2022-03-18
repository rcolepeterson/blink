import React from "react";
import fire from "../firebase/firebase";
const Ranking = ({ score }) => {
  const [ranking, setRanking] = React.useState(0);
  const [numUsers, setNumUsers] = React.useState(0);
  // this function gets a collection from a firebase firestore database
  // and returns a list of objects
  const getCollection = async (collection) => {
    const snapshot = await fire.collection(collection).get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
  };

  //this functions adds and item to a firebase firestore collection
  const addItem = async (collection, item) => {
    await fire.collection(collection).add(item);
  };

  //this function randomly genereates initials for a user using the alphabet
  const getInitials = () => {
    let initials = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 2; i++) {
      initials += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return initials;
  };

  React.useEffect(() => {
    getCollection("leaderboard").then((users) => {
      users.sort((a, b) => {
        return b.score - a.score;
      });
      let initials = getInitials();
      console.log(initials);
      addItem("leaderboard", { name: initials, score: score });
      setNumUsers(users.length + 1);
      let t = users.filter((user) => user.score > score);
      console.log(t);

      setRanking(t.length + 1);
    });
  }, []);

  return ranking === 0 ? (
    <p className="text-center w-full text-lg mb-2">Fetching Ranking ...</p>
  ) : (
    <div>
      <p className="text-center w-full text-lg mb-2"> Your Global Ranking:</p>
      <h1 className="text-center w-full numbers mb-2">{ranking}</h1>
      <p className="text-center w-full uppercase text-xl mb-1"> Out of</p>
      <h4 className="text-center w-full numbers">{numUsers}</h4>
    </div>
  );
};

export default Ranking;
