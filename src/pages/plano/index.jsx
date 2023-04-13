import React, { useEffect, useState } from "react";
import api from "../../services/api";
//import { data } from '../../data/data.js'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';


export default function Plano({ registros: fetchedPlano }) {
  const [registros, setRegistros] = useState(fetchedPlano);

  return (
    <div>
      
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between p-4">
          <h2>Categorias</h2>
          <h2>Welcome Back, Clint</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Name</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {registros.map((movto, id) => (
                <li
                  key={id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <BsPersonFill className="text-purple-800" />
                    </div>
                    <p className="pl-4">{movto.numero}</p>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    {movto.descricao}
                  </p>
                  <p className="hidden md:flex">{movto.saldo_iniv}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{movto.dt_saldo}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await api.get("/planos");

    console.log("data ", data.response);

    return {
      props: {
        registros: data.response,
      },
    };
  } catch (err) {
    console.log(err);
  }
  //return data;
};
