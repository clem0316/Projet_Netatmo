import { useState, useEffect } from "react";
import loadIcon from "../assets/loadIcon.svg";
import DisplayUsers from "./DisplayUsers";

export default function Cards() {
  const [myAPI, setMyAPI] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  // -------- Fetch API -------- //
  useEffect(() => {
    setMyAPI({ ...myAPI, loading: true });
    fetch("https://randomuser.me/api/?results=1000")
      .then((res) => {
        if (!res.ok) throw new Error("The request is not correct");
        return res.json();
      })
      .then((data) => {
        setMyAPI({ loading: false, error: false, data: data });
      })
      .catch((e) => {
        console.log(e);
        setMyAPI({ loading: false, error: true, data: undefined });
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
  }
  //  else if (myAPI.data?.length > 0) {
  //   content = (
  //     <ul>
  //       {myAPI.data.map((item) => {
  //         <li key={item.id}>
  //           <span>essai</span>
  //         </li>;
  //       })}
  //     </ul>
  //   );
  // }
  else if (myAPI.data?.length === 0) {
    content = (
      <p className="text-red-600">No data corresponds to your request !</p>
    );
  }

  let theUsers = [];
  // let userContent;

  // const [checked, setChecked] = useState(false);

  // ------ Call 1O Users ------ //

  function tenUsers() {
    for (let i = 0; i < 10; i++) {
      theUsers.push(myAPI.data.results[i]);
    }
    console.log(theUsers);
  }

  function tenMaleUsers() {
    let maleUsers = myAPI.data.results.filter((user) => user.gender === "male");
    for (let i = 0; i < 10; i++) {
      theUsers.push(maleUsers[i]);
    }

    console.log(theUsers);
  }

  function tenFemaleUsers() {
    let femaleUsers = myAPI.data.results.filter(
      (user) => user.gender === "female"
    );
    for (let i = 0; i < 10; i++) {
      theUsers.push(femaleUsers[i]);
    }
    console.log(theUsers);
  }

  //   userContent = (
  //     <ul>
  //       {theUsers.map((item) => (
  //         <li key={item.id}>
  //           <span className="userName">
  //             {item.name.first} {item.name.last}
  //           </span>
  //         </li>
  //       ))}
  //     </ul>
  //   );

  //   return userContent;
  // }

  function clear() {
    theUsers = [];
    console.log(theUsers);
  }

  function dateOrderFromYoung() {
    theUsers.sort((a, b) => (a.dob.date < b.dob.date ? 1 : -1));
    console.log(theUsers);
  }

  function dateOrderFromOld() {
    theUsers.sort((a, b) => (a.dob.date > b.dob.date ? 1 : -1));
    console.log(theUsers);
  }

  // function displayUsers() {
  //   for (let i = 0; i < theUsers.length; i++)
  //     return `
  // <div>
  // <p>bonjour</p>
  // </div>`;
  // }

  return (
    <div>
      {content}
      <div className="allButtons flex py-4 justify-evenly">
        <button onClick={tenUsers} className="bg-green-600 mx-5">
          +10
        </button>
        <button onClick={tenMaleUsers} className="bg-orange-600">
          +10 men
        </button>
        <button onClick={tenFemaleUsers} className="bg-amber-600">
          +10 women
        </button>
        <button onClick={clear} className="bg-teal-200">
          Clear
        </button>
      </div>
      <div className="orderButtons my-4 text-sm flex justify-evenly">
        <button
          onClick={dateOrderFromYoung}
          className="text-slate-50 bg-stone-800"
        >
          Order from younger
        </button>
        <button
          onClick={dateOrderFromOld}
          className="text-slate-50 bg-stone-800"
        >
          Order from older
        </button>
      </div>
      <ul>
        {theUsers.map((item) => (
          <DisplayUsers
            key={item.id.value}
            email={item.email}
            gender={item.gender}
            name={item.name}
            picture={item.picture.large}
          />
        ))}
      </ul>
      {/* <label htmlFor="test">
        bonjour
        <input
          type="checkbox"
          id="test"
          checked={checked}
          onChange={handleChange}
        />
      </label> */}
    </div>
  );
}
