"use client";
import Dropdown from "@/components/common/dropdown";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { StationType } from "./types";

import TrainMap from "@/../public/trainmap.svg";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/Axios";

// const mockData = [
//   {
//     label: "test",
//     value: "test1"

//   }]

const Homepage = () => {
  const router = useRouter();

  const [originStation, setOriginStation] = useState<StationType | null>(null);
  const [destinationStation, setDestinationStation] =
    useState<StationType | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleSwitch = () => {
    setOriginStation(destinationStation);
    setDestinationStation(originStation);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="min-h-screen w-full">
      <div
        className={`w-full h-120 flex justify-center flex-col space-y-4 items-center gap-4`}
        style={{
          backgroundImage: `url('/assets/home/BackgroundRodFai.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[40px] tracking-wider">
            LET’S FIND YOUR CHEAPEST ROUTE
          </h1>
          <h1 className="font-semibold text-[24px] tracking-wider">
            Find the route with the lowest fares for you!
          </h1>
        </div>
        <div className="flex gap-5">
          <Dropdown
            title="Origin"
            selectedStation={originStation}
            setSelectedStation={setOriginStation}
          />
          <div
            onClick={handleSwitch}
            className="cursor-pointer flex justify-center w-full h-full"
          >
            <Image
              src="/assets/home/switch.svg"
              alt="switch"
              width={32}
              height={32}
            />
          </div>
          <Dropdown
            title="Destination"
            selectedStation={destinationStation}
            setSelectedStation={setDestinationStation}
          />
        </div>
        <button
          className="p-1.75 pl-12 pr-12 bg-[#708C82] rounded-[15px] text-2xl font-bold text-[#F8F7FF] tracking-wider hover:bg-[#588474] cursor-pointer"
          onClick={() => router.push(`/visualize`)}
        >
          Search
        </button>
      </div>
      <div 
        className={`w-full ${isFullScreen ? 'fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center' : 'h-[1100px] flex items-center justify-center'}`}
        onClick={toggleFullScreen}
      >
        <Image 
          src={TrainMap} 
          alt="TrainMap" 
          className={isFullScreen ? 'w-full h-full object-contain' : ''}
        />
      </div>
    </div>
  );
};

export default Homepage;
