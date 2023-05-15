/*
Funcao que encpsula a coluna valor retornando o valor formatado em reais
*/ 
import React from "react";
import numeral from "numeral";
//import './UINumber.css';

export default function UINumber( { format, children } ) {

    console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(children));

    return (
        <span>
            R$ {numeral( children ).format( format )}
        </span>
    );
    
}