//import '@/styles/globals.css'>
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

//import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}, Password: ${password}`);
    
    if( email == "jgartdesign2017@gmail.com"){

      router.push("/dashboard");
      return

    }//else{
//ta indo certo agora e limpar os campos e notificar
      //router.push("/");
      console.log("Email incorreto");
      setEmail("");
      setPassword("");
      return

    }
    
    //}

  //};

  return (
    <>
      <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form
                className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
                onSubmit={handleSubmit}
              >
                <p className="text-black font-medium text-center text-lg font-bold">
                  LOGIN
                </p>

                <div className="">
                  <label className="block text-sm text-white" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="Digite o e-mail"
                    aria-label="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  ></input>
                </div>

                <div className="mt-2">
                  <label className="block  text-sm text-white">Senha</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Digite a sua senha"
                    arial-label="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  ></input>
                </div>

                <div className="mt-4 items-center flex justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit"
                  >
                    Entrar
                  </button>
                  <a
                    className="inline-block right-0 align-baseline font-bold text-sm text-500 text-black hover:text-red-400"
                    href="#"
                  >
                    Esqueceu a senha ?
                  </a>
                </div>

                <div className="text-center">
                  <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                    Criar uma conta
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
