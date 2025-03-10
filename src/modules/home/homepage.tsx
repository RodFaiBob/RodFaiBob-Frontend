"use client";
import Dropdown from "@/components/common/dropdown";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { StationType } from "./types";

import TrainMap from "@/../public/trainmap.svg";
import { useRouter } from "next/navigation";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="flex flex-col items-center gap-4 w-fit ">
      <div
        onClick={() => zoomIn()}
        className="cursor-pointer flex  w-full "
      >
        <Image
          src="/assets/home/zoomin.png"
          alt="zoomin"
          width={48}
          height={48}
        />
      </div>
      <div
        onClick={() => zoomOut()}
        className="cursor-pointer flex  w-full"
      >
        <Image
          src="/assets/home/zoomout.png"
          alt="zoomout"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};


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

  const handleSwitch = () => {
    setOriginStation(destinationStation);
    setDestinationStation(originStation);
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
      <div className="relative w-full h-[134vh]">
        <TransformWrapper
          initialScale={1}
          initialPositionX={200}
          initialPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            < >
              <div className="absolute left-[18.5%] top-6 ">
                <TransformComponent>
                  <Image src={TrainMap} alt="map" className="w-full h-auto" />
                </TransformComponent>
              </div>
              <div className="absolute right-20 top-20 ">
                <Controls />

              </div>
            </>
 
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Homepage;
