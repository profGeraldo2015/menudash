import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
//port { data } from '../../data/data.js';
import api from '../../services/api'
import { useState } from 'react';


const Movimento = ({ registros: fetchedMovimento }) => {

    const [registros, setRegistros] = useState(fetchedMovimento);

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Movimentos</h2>
                <h2>Welcome Back, Clint</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='hidden sm:grid'>Method</span>
                    </div>
                    <ul>
                        {registros.map((movto, id) => (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className='flex items-center'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <BsPersonFill className='text-purple-800' />
                                    </div>
                                    <p className='pl-4'>{movto.debito + ' ' + movto.credito}</p>
                                </div>
                                <p className='text-gray-600 sm:text-left text-right'>{movto.hist}</p>
                                <p className='hidden md:flex'>{movto.dt_vencto}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    <p>{movto.valor}</p>
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
