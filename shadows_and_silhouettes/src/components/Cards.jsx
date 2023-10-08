import { useState, useEffect } from "react";
import loadIcon from "../assets/loadIcon.svg";

export default function Cards() {
  const [myAPI, setMyAPI] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setMyAPI({ ...myAPI, loading: true });
    fetch("https://randomuser.me/api/?results=1000")
      .then((res) => {
        if (!res.ok) throw new Error("The request is not correct");
        return res.json();
      })
      .then((data) => {
        setMyAPI({ loading: false, error: false, data: data });
      });
  }, []);

  // console.log(myAPI.data.results);

  let content;

  if (myAPI.loading) {
    content = (
      <img src={loadIcon} alt="Page en chargement, veuillez patienter..." />
    );
  } else if (myAPI.error) {
    content = <p className="text-red-600">Une erreur est survenue !</p>;
  } else if (myAPI.data?.length > 0) {
    content = (
      <ul>
        {myAPI.data.map((item) => {
          <li key={item.id}>
            <span>essai</span>
          </li>;
        })}
      </ul>
    );
  } else if (myAPI.data?.length === 0) {
    content = (
      <p className="text-red-600">No data corresponds to your request !</p>
    );
  }

  let theUsers = [];
  let userContent;

  function tenUsers() {
    for (let i = 0; i < 10; i++) {
      theUsers.push(
        myAPI.data.results[
          Math.floor(Math.random() * myAPI.data.results.length)
        ]
      );
    }
    console.log(theUsers);

    userContent = (
      <ul>
        {theUsers.map((item) => (
          <li key={item.id}>
            <span className="userName">
              {item.name.first} {item.name.last}
            </span>
          </li>
        ))}
      </ul>
    );

    return userContent;
  }

  function clear() {
    theUsers = [];
    console.log(theUsers);
  }

  return (
    <div>
      <h1>Résultat de votre recherche : </h1>
      {content}
      <button onClick={tenUsers}>+10</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
