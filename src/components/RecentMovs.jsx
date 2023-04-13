
import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentMovs = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Lançamentos recentes</h1>
      <ul>
        {data.map((movto, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-3'>
              <p className='text-gray-800 font-bold'>${movto.valor}</p>
              <p className='text-gray-400 text-sm'>{movto.credito}</p>
              <p className='text-gray-400 text-sm'>{movto.debito}</p>
              <p className='text-gray-400 text-sm'>{movto.hist}</p>
              
            </div>

            <p className='lg:flex md:hidden absolute right-6 text-sm'>{movto.dt_vencto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentMovs;
