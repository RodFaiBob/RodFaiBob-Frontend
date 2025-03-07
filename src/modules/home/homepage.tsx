'use client'
import Dropdown from '@/components/common/dropdown'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { StationType } from './types';

import TrainMap from '@/../public/trainmap.svg'

const mockData = [
  {
    label: "test",
    value: "test1"

  }]


const Homepage = () => {
  const [originStation, setOriginStation] = useState<StationType | null>(null);
  const [destinationStation, setDestinationStation] = useState<StationType | null>(null);

  const handleSwitch = () => {
    setOriginStation(destinationStation);
    setDestinationStation(originStation);
  };

  return (
    <div className='min-h-screen w-full'>
      <div
        className={`w-full h-120 flex justify-center flex-col space-y-4 items-center gap-4`}
        style={{
          backgroundImage: `url('/assets/home/BackgroundRodFai.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='flex flex-col items-center'>
          <h1 className='font-extrabold text-[40px] tracking-wider'>LET’S FIND YOUR CHEAPEST ROUTE</h1>
          <h1 className='font-semibold text-[24px] tracking-wider'>Find the route with the lowest fares for you!</h1>
        </div>
        <div className='flex gap-5'>
          <Dropdown 
          title="Origin" 
          selectedStation={originStation}
          setSelectedStation={setOriginStation}/>
          <div onClick={handleSwitch} className="cursor-pointer flex justify-center w-full h-full">
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
          setSelectedStation={setDestinationStation}/>
        </div>
        <button className='p-1.75 pl-12 pr-12 bg-[#708C82] rounded-[15px] text-2xl font-bold text-[#F8F7FF] tracking-wider hover:bg-[#588474] cursor-pointer'>Search</button>
      </div>
      <div className='w-full h-[1100px] flex items-center justify-center'>
        <Image src={TrainMap} alt='TrainMap' />
      </div>
    </div>
  )
}

export default Homepage