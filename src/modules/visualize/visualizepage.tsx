"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/Axios";
import stations from "@/constant/stations";

const InterchangePoint = ({
  stnName,
  stnCode,
  colorCode,
}: {
  stnName: string;
  stnCode: string;
  colorCode: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center gap-0.5">
        <div
          className={`w-6 h-6 rounded-full`}
          style={{ backgroundColor: colorCode }}
        ></div>
        <div className="text-xs">{stnCode}</div>
      </div>

      <div className="font-thai ">{stnName}</div>
    </div>
  );
};

const StationPoint = ({
  stnName,
  stnCode,
  colorCode,
}: {
  stnName: string;
  stnCode: string;
  colorCode: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex justify-center items-center w-10 h-10 border-4 rounded-full m-1`}
        style={{ borderColor: colorCode }}
      >
        <div className="font-semibold text-[12px] tracking-normal">
          {stnCode}
        </div>
      </div>
      <div className="font-thai">{stnName}</div>
    </div>
  );
};

const Modal = ({ onClose, data }: { onClose: () => void; data: Data }) => {
  const stnPath = data.path.flatMap((code) =>
    Object.values(stations)
      .flat()
      .filter((st) => st.stnCode === code)
  );
  return (
    <div className="absolute inset-0 bg-[#2D2C38]/25 flex justify-center items-center">
      <div className="bg-[#708C82] text-white rounded-2xl w-[90%]">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold ml-5 mt-2">Route and Fares</h2>
            <button
              onClick={onClose}
              className="cursor-pointer text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="m-1 bg-white p-4 rounded-b-xl ">
          <div className="text-black text-sm">
            <div className="flex items-start">
              <div className="flex flex-col w-1/2 gap-2 border-r-2 border-[#708C82] m-2 pr-3">
                <div className="flex gap-3 ml-3">
                  <Image
                    src="/assets/pin.svg"
                    width={20}
                    height={20}
                    alt="pin"
                  />
                  <div className="text-[#CDCDCD]">Origin</div>
                </div>
                <div>
                  <StationPoint
                    stnName={stnPath[0].stnName}
                    stnCode={stnPath[0].stnCode}
                    colorCode={stnPath[0].colorCode}
                  />
                </div>

                <div className="flex flex-col gap-2 ml-5 my-1">
                  <div>
                    <Image
                      src="/assets/elipse.svg"
                      width={8}
                      height={8}
                      alt="elipse"
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/elipse.svg"
                      width={8}
                      height={8}
                      alt="elipse"
                    />
                  </div>
                </div>

                <div className="flex gap-3 ml-3">
                  <Image
                    src="/assets/pin.svg"
                    width={20}
                    height={20}
                    alt="pin"
                  />
                  <div className="text-[#CDCDCD]">Destination</div>
                </div>
                <div>
                  <StationPoint
                    stnName={stnPath[stnPath.length - 1].stnName}
                    stnCode={stnPath[stnPath.length - 1].stnCode}
                    colorCode={stnPath[stnPath.length - 1].colorCode}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3 mt-2  gap-2">
                <div className="font-semibold text-lg">Interchange</div>
                {stnPath.slice(1, -1).map((stn, index, arr) => {
                  if (index % 2 !== 0) return null;

                  const nextStn = arr[index + 1];
                  if (!nextStn) return null;

                  return (
                    <div
                      key={`${stn.stnCode}-${nextStn.stnCode}`}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <InterchangePoint
                          stnName={stn.stnName}
                          stnCode={stn.stnCode}
                          colorCode={stn.colorCode}
                        />
                        <span className="pb-1">→</span>
                        <InterchangePoint
                          stnName={nextStn.stnName}
                          stnCode={nextStn.stnCode}
                          colorCode={nextStn.colorCode}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="w-full bg-[#F5C2C2] font-semibold text-xl py-2 rounded-2xl mt-2">
            Fare : {data.cost} Bath
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchCard = ({ title, data }: { title: string; data: Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-1/2 bg-white p-10 rounded-lg">
      <h2 className="text-center text-3xl text-[#708C82] font-semibold border-3 border-[#708C82] py-2 rounded-xl">
        {title}
      </h2>
      <div className="w-full h-100 bg-[#F1F0FF] rounded-lg mt-4">
        {isOpen && <Modal data={data} onClose={() => setIsOpen(false)} />}
      </div>
      <div className="flex justify-evenly mt-4 font-semibold text-[16px]">
        <div>
          Runtime :{" "}
          <span className="font-medium text-[16px]">{data.runtime}</span>
        </div>
        <div>
          Memory Usage :{" "}
          <span className="font-medium text-[16px]">{data.cpu}</span>
        </div>
      </div>
      <button
        className="w-full cursor-pointer bg-[#708C82] text-white font-semibold text-2xl py-3 rounded-xl mt-4"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        View Result
      </button>
    </div>
  );
};

interface VisualizePageProps {
  origin: string;
  destination: string;
}
interface Data {
  path: string[];
  cost: string;
  runtime: string;
  cpu: string;
}

const VisualizePage = ({ origin, destination }: VisualizePageProps) => {
  const router = useRouter();

  const [blindData, setBlindData] = useState<Data>();
  const [heuristicData, setHeuristicData] = useState<Data>();

  function fetchBlindData(origin: string, destination: string) {
    axiosInstance
      .get(`/blind/?start=${origin}&goal=${destination}`)
      .then((res) => {
        setBlindData(res.data);
        console.log(res.data);
      });
  }
  function fetchHeuristicData(origin: string, destination: string) {
    axiosInstance
      .get(`/heuristic/?start=${origin}&goal=${destination}`)
      .then((res) => {
        setHeuristicData(res.data);
        console.log(res.data);
      });
  }
  useEffect(() => {
    fetchHeuristicData(origin, destination);
    fetchBlindData(origin, destination);
  }, [destination, origin]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="w-full bg-[#F1F0FF]  relative">
        <button
          className="flex cursor-pointer gap-1 absolute left-4 top-10 transform -translate-y-1/2 text-[24px] font-bold"
          onClick={() => router.replace("/")}
        >
          <Image src="/assets/back.svg" width={30} height={30} alt="back" />
          Back
        </button>

        <h1 className="font-extrabold text-[40px] text-center p-6">
          Compare Search Strategies
        </h1>
      </div>

      <div className="w-full bg-white flex justify-center gap-10 px-10">
        {blindData && <SearchCard title="Blind Search" data={blindData} />}
        <div className="w-px my-3 bg-[#708C82]"></div>
        {heuristicData && (
          <SearchCard title="Heuristic Search" data={heuristicData} />
        )}
      </div>
      <div className="w-full flex justify-center">
        <button className="w-100 cursor-pointer flex justify-center gap-5 bg-[#F5C2C2] text-white font-semibold text-2xl py-3 rounded-2xl mt-4 mb-10">
          <Image src="/assets/start.svg" width={15} height={20} alt="start" />
          Start Animation
        </button>
      </div>
    </div>
  );
};

export default VisualizePage;
