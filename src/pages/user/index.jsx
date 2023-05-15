import UserList from "@/components/UserList";
import React, { useState } from "react";
import api from "../../services/api";
import { useUsers } from "@/hooks/useUsers";

const User = ({ registros: fetchedUser }) => {
  // const { userss } = useUsers();

  //console.log("vindo do hook ", userss);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [users, setUsers] = useState(fetchedUser);

  //const [registros, setRegistros] = useState(fetchedUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  // console.log("users antes do component ", userss);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form
          className="bg-white p-10 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Entrar
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100"></div>
    </>
  );
};

//<UserList users={users} />
//<pre>{JSON.stringify(userss)}</pre>
export default User;

export const getServerSideProps = async () => {
  try {
    const { data } = await api.get("/users");

    //console.log("data usuarios ", data);

    return {
      props: {
        registros: data.response,
        campos: data.campos,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        registros: [],
        campos: [],
        ok: false,
      },
    };
  }
  //return data;
};

/*
 <form className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>


*/
