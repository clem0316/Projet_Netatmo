import { useState, useEffect } from "react";

export default function Cards() {
  const [myAPI, setMyAPI] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setMyAPI({ ...myAPI, loading: true });
  });
  fetch("")
  return <div>Cards</div>;
}
