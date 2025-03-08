"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
        className={`flex justify-center items-center w-10 h-10 border-3 rounded-full m-1`}
        style={{ borderColor: colorCode }}
      >
        <div className="font-semibold">{stnCode}</div>
      </div>
      <div className="font-thai">{stnName}</div>
    </div>
  );
};

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="absolute inset-0 bg-[#2D2C38]/25 flex justify-center items-center">
      <div className="bg-[#708C82] text-white rounded-xl w-[90%]">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold ml-10 mt-3">Route and Fares</h2>
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
                    stnName="พิพิธภัณฑ์กองทัพอากาศ"
                    stnCode="N24"
                    colorCode="#8CB63C"
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
                    stnName="โชคชัย 4"
                    stnCode="YL03"
                    colorCode="#F5D411"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3 mt-2  gap-2">
                <div className="font-semibold text-lg">Interchange</div>
                <div className="flex items-center gap-2">
                  <InterchangePoint
                    stnName="ห้าแยกลาดพร้าว"
                    stnCode="N09"
                    colorCode="#8CB63C"
                  />
                  <div>→</div>
                  <InterchangePoint
                    stnName="พหลโยธิน"
                    stnCode="BL14"
                    colorCode="#2C347D"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#F5C2C2] font-semibold text-xl py-2 rounded-2xl mt-2">
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
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </div>
      <div className="flex justify-evenly mt-4 text-sm">
        <div className="font-semibold text-xl">Runtime : 1234</div>
        <div className="font-semibold text-xl">Memory Usage : 1234</div>
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

const VisualizePage = () => {
  const router = useRouter();
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
        <SearchCard title="Blind Search" />
        <div className="w-px my-3 bg-[#708C82]"></div>
        <SearchCard title="Heuristic Search" />
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
