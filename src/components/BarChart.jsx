import React from "react";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


import { Bar } from "react-chartjs-2";
//import  faker  from 'faker';

const buscaMovto = (data) => {
  fetch("http://localhost:3000/movimentacao/:data")
  .then((response)=>response.json())
  .then((response)=>{})
  .catch((err)=>console.log(err))
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChart = () => {

  const [charData, setCharData] = useState({
    datasets:[],
  });

  const [charOptions, setCharOptions] = useState({});

  useEffect(() => {
    setCharData({
      labels: ["Cesp", "Alimentação", "Al", "Extras", "Teste"],
      datasets: [
        {
          label: "Creditos",
          data: [230, 4567, 434, 3456, 34],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235, 0.4)",
        },
      ],
    })
    setCharOptions({
      plugins: {
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Daily Revenue'
          }
      },
      maintainAspectRatio: false,
      responsive: true
  })
  }, [])

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={charData} options={charOptions} />
      </div>
    </>
  );
};
export default BarChart;
