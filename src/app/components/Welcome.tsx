import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";


const Welcome = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-500 flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col md:mr-10">
         <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Welcome <br /> My friend all across
         </h1>
         <p className="text-left mt-5 text-white font-light mf:w-9/12 w-11/12 text-base">
          Implementing User authentication using clerk and connecting it to a mongo db database.
         </p>

         <button
           type="button"
           className="flex flex-row justify-center items-center my-5 bg-emerald-300 p-3 rounded-full cursor-pointer hover:bg-emerald-100">
             <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
           </button>
        </div> 
      </div>
    
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
      <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  0xasdas....fhahsd
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Welcome