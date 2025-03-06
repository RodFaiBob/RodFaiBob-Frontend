"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Modal = ({ onClose }: { title: string; onClose: () => void }) => {
  return (
    <div className="absolute inset-0 bg-[#2D2C38]/25 flex justify-center items-center">
      <div className="bg-[#708C82] text-white rounded-xl w-[90%]">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Route and Fares</h2>
            <button onClick={onClose} className="text-white text-xl">
              ✕
            </button>
          </div>
        </div>

        <div className="m-1 bg-white p-4 rounded-sm ">
          <p className="text-black text-sm">
            <div className="flex justify-around">
              <div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/pin.svg"
                    width={20}
                    height={20}
                    alt="pin"
                  />
                  <div>Origin</div>
                </div>
                <div>พิพิธภัณฑ์กองทัพอากาศ</div>
                <div>O</div>
                <div>O</div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/pin.svg"
                    width={20}
                    height={20}
                    alt="pin"
                  />
                  <div>Destination</div>
                </div>
              </div>
              <div className="w-0.5 bg-[#708C82]"></div>
              <div>Interchange</div>
            </div>
          </p>
          <button
            className="w-full bg-[#F5C2C2] font-semibold text-xl py-2 rounded-2xl mt-2"
          >
            Fare : 45 Bath
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchCard = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-1/2 bg-white p-10 rounded-lg">
      <h2 className="text-center text-3xl text-[#708C82] font-semibold border-3 border-[#708C82] py-2 rounded-xl">
        {title}
      </h2>
      <div className="w-full h-100 bg-[#F1F0FF] rounded-lg mt-4">
        {isOpen && <Modal title={title} onClose={() => setIsOpen(false)} />}
      </div>
      <div className="flex justify-evenly mt-4 text-sm">
        <div className="font-semibold text-xl">Runtime : 1234</div>
        <div className="font-semibold text-xl">Memory Usage : 1234</div>
      </div>
      <button
        className="w-full bg-[#708C82] text-white font-semibold text-2xl py-3 rounded-xl mt-4"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        View Result
      </button>
    </div>
  );
};

const VisualizePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-pop bg-white">
      <div className="w-full bg-[#F1F0FF]  relative">
        <button className="flex gap-1 absolute left-4 top-10 transform -translate-y-1/2 text-2xl font-bold">
          <Image src="/assets/back.svg" width={30} height={30} alt="back" />
          Back
        </button>

        <h1 className="text-5xl font-extrabold text-center p-10">
          Compare Search Strategies
        </h1>
      </div>

      <div className="w-full bg-white flex justify-center gap-10 px-10">
        <SearchCard title="Blind Search" />
        <div className="w-px my-3 bg-[#708C82]"></div>
        <SearchCard title="Heuristic Search" />
      </div>
      <div className="w-full flex justify-center">
        <button className="w-90 flex justify-center gap-5 bg-[#F5C2C2] text-white font-semibold text-2xl py-3 rounded-2xl mt-4 mb-10">
          <Image src="/assets/start.svg" width={15} height={20} alt="start" />
          Start Animation
        </button>
      </div>
    </div>
  );
};

export default VisualizePage;
