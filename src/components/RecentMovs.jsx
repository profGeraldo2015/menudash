import React, { useState, useEffect } from "react";
import api from "../services/api";
import { FaShoppingBag } from "react-icons/fa";
import UIDate from "./UIDate";
import UINumber from "./UINumber";

const RecentMovs = () => {
  
  const [movtos, setMovtos] = useState([]);

  let dataHoje = new Date().toISOString().slice(0, 10);
  let dataHoje2 = "2021-12-20";

  console.log(dataHoje);

  const buscaMovtos = async () => {
    try {
      const { data } = await api.patch("/movimentos/" + dataHoje2);
      //const { data } = await api.get("/movimentos");

      //console.log("dentro ", data.response);

      setMovtos(data.response);
    } catch (error) {
      console.error(error);
      setMovtos([]);
    }

    //console.log("fora ", movtos);
  };

  useEffect(() => {
    buscaMovtos();
  }, []);

  //            <div className="bg-purple-100 rounded-lg p-3">
  //              <FaShoppingBag className="text-purple-800" />
  //            </div>
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Lançamentos recentes em {dataHoje}</h1>
      <ul>
        {movtos.map((movto, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="pl-3">
              <p className="text-gray-800 font-bold text-[14px]">
                <UINumber>R${movto.valor}</UINumber>
              </p>
              <p className="text-gray-400 text-[10px]">
                {movto.credito}
              </p>
              <p className="text-gray-400 text-[10px]">
                {movto.debito}
              </p>
              <p className="text-gray-400 text-[10px]">{movto.hist}</p>
            </div>

            <p className="lg:flex md:hidden absolute right-6 text-sm text-[10px]">
              <UIDate>{movto.dt_vencto}</UIDate>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentMovs;
