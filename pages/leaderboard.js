import fire from "../firebase/firebase";
import React from "react";
import Logo from "../components/Logo";
const leaderboard = () => {
  // this function gets a collection from a firebase firestore database
  // and returns a list of objects
  const getCollection = async (collection) => {
    // let ref = fire.collection("graffiti").doc("current");
    const snapshot = await fire.collection(collection).get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
  };

  //this function converts milliseconds into a timestamp
  const getTimestamp = (mill) => {
    let date = new Date(mill);

    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let timestamp = minutes + ":" + seconds + ":" + milliseconds;
    return timestamp;
  };

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getCollection("leaderboard").then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <div className="p-6 pb-0">
        <Logo />
      </div>
      <div className="text-center w-full mx-auto max-w-sm bg-transparent flex flex-col justify-center items-center px-4 font-Raleway">
        <h2 className="py-6">Don't Blink Leaderboard</h2>
        {users.map((user) => {
          return (
            <div className="flex">
              <h3>{user.username}: </h3>
              <h3 className="pl-4">{getTimestamp(user.ms)}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default leaderboard;
