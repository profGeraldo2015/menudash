import { useEffect, useState } from "react";

export const useUsers = () => {

  const [userss, setUserss] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((data) => setUserss(data.response));
    console.log('dentro ',userss);
  }, []);
  console.log('fora ',userss);

  return { userss };
};
