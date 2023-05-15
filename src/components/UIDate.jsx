import React from "react";
//import './utils.css';

export default function UIDate( { children } ) {

    function zeroFill(n) {

        return n < 9 ? `0${n}` : `${n}`;

    }

    function formatDate(date){

       // console.log(date);

        var dd = new Date(date);
    
        //console.log(dd);

        const d = zeroFill(dd.getUTCDate());

       // console.log('d' , d);

        const m = zeroFill(dd.getUTCMonth()+1 );
        const y = zeroFill(dd.getUTCFullYear());

        return `${d}/${m}/${y}`;

    }
    
    return (
        <span className="ui-date">
         {formatDate( children )}
        </span>
    );
    
}