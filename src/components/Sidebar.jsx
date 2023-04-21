import Link from "next/link";
import React from "react";
import {RxSketchLogo , RxDashboard , RxPerson} from 'react-icons/rx'
import {RiBarChart2Line, RiBookOpenLine, RiTodoLine} from 'react-icons/ri'

import {TfiFiles} from 'react-icons/tfi'

import {FiSettings} from 'react-icons/fi'


const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/login">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/movimento">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
              <RiTodoLine size={20} />
            </div>
          </Link>
          <Link href="/plano">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
              <RiBookOpenLine size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/grafico">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
              <TfiFiles size={20} />
            </div>
          </Link>
          <Link href="/report">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/config">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          
        </div>
      </div>

      <main className="ml-20 w-full">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
