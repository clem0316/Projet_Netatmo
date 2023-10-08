export default function DisplayUsers({ email, gender, name, picture }) {
  return (
    <div>
      <span>
        {name.first} {name.last}
      </span>
      <span>{gender}</span>
      <span>{email}</span>
      <span>{picture}</span>
    </div>
  );
}
