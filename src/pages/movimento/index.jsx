import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
//port { data } from '../../data/data.js';
import api from "../../services/api";
import { useState } from "react";
import UIDate from "@/components/UIDate";
import UINumber from "@/components/UINumber";
//import { Dialog } from "@headlessui/react";
//import Modal from "../../components/Modal";

const Movimento = ({ registros: fetchedMovimento, ok, campos, plano2 }) => {
  console.log("campos planos2 ", plano2);

  const [camposDB, setCamposDB] = useState(campos);
  const [registros, setRegistros] = useState(fetchedMovimento);

  if (ok) {
    //usar registros para fazer a tela de entrada de dados inclusao
    for (let i = 0; i < camposDB.length; i++) {
      console.log("campo vindo da query ", camposDB[i]);
      console.log(camposDB[1]);
    }
  } else console.log("nao tem");

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-titulo">Movimentos</h2>
        <h2 className="text-black text-[14px] p-3">Welcome Back, Clint</h2>
      </div>

      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-left cursor-pointer">
            <span>{camposDB[1]}</span>
            <span>Débito</span>
            <span className="sm:text-left text-right">Histórico</span>
            <span className="sm:text-left text-right">Observação</span>

            <span className="sm:text-left text-right">Vencimento</span>
            <span className="hidden md:grid">Valor</span>
          </div>
          <ul>
            {registros.map((movto, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-lg">
                    <p className="pl-4">{movto.credito}</p>
                  </div>
                  <div className="bg-red-400 p-2 rounded-lg">
                    <p className="pl-4">{movto.debito}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {movto.hist}
                </p>
                <p className="text-gray-600 sm:text-left text-right">
                  {movto.obs}
                </p>
                <p className="hidden md:flex">
                  <UIDate>{movto.dt_vencto}</UIDate>
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>
                    <UINumber format="0.00">{movto.valor}</UINumber>
                  </p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movimento;

export const getServerSideProps = async () => {
  try {
    const { data } = await api.get("/movimentos");

    return {
      props: {
        registros: data.response,
        campos: data.campos,
        ok: true,
      },
    };
  } catch (err) {
    //console.log(err);
    return {
      props: {
        registros: [],
        campos: [],
        ok: false,
      },
    };
  }
};

/*type registro = {
  
    id: number;
    nome: string;
    cpf: string;
}

linha 52<!--BsPersonFill className='text-purple-800' /-->

*/
