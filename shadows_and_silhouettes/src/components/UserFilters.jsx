export default function UserFilters() {
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
    console.log(theUsers.filter((user) => user.gender === "male"));

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

  return <div>{tenUsers}</div>;
}
