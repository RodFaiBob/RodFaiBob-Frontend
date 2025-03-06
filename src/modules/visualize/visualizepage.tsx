"use client";
import React from "react";
import Image from "next/image";

const SearchCard = ({ title }: { title: string }) => {
  return (
    <div className="w-1/2 bg-white p-10 rounded-lg">
      <h2 className="text-center text-3xl text-[#708C82] font-semibold border-3 border-[#708C82] py-2 rounded-xl">
        {title}
      </h2>
      <div className="w-full h-100 bg-[#F1F0FF] rounded-lg mt-4"></div>
      <div className="flex justify-evenly mt-4 text-sm">
        <div className="font-semibold text-xl">Runtime : 1234</div>
        <div className="font-semibold text-xl">Memory Usage : 1234</div>
      </div>
      <button className="w-full bg-[#708C82] text-white font-semibold text-xl py-3 rounded-xl mt-4">
        View Result
      </button>
    </div>
  );
};

const VisualizePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-pop bg-white py-10">
      <div className="w-full bg-[#F1F0FF] p-4 relative">
        <button className="flex gap-1 absolute left-4 top-10 transform -translate-y-1/2 text-2xl font-bold">
          <Image src="/assets/back.svg" width={30} height={30} alt="back" />
          Back
        </button>

        <h1 className="text-5xl font-extrabold text-center p-5">
          Compare Search Strategies
        </h1>
      </div>

      <div className="w-full bg-white flex justify-center gap-10 px-10">
        <SearchCard title="Blind Search" />
        <div className="w-px my-3 bg-[#708C82]"></div>
        <SearchCard title="Heuristic Search" />
      </div>
      <div className="w-full flex justify-center">
        <button className="w-90 flex justify-center gap-5 bg-[#F5C2C2] text-white font-semibold text-xl py-3 rounded-xl mt-4">
          <Image src="/assets/start.svg" width={15} height={20} alt="start" />
          Start Animation
        </button>
      </div>
    </div>
  );
};

export default VisualizePage;
