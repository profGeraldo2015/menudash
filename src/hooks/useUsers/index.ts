import { useEffect, useState } from "react";

export const useUsers = () => {
  
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

   return users;
};
