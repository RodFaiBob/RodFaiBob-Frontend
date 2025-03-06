'use client'
import Dropdown from '@/components/common/dropdown'
import Image from 'next/image'
import React from 'react'
import BackgroundRodFai from '@/assets/home/BackgroundRodFai.svg'
import TrainMap from '@/../public/trainmap.svg'

const mockData = [
  {
  label : "test",
  value: "test1"

}]

const Homepage = () => {
  const handleOnSelect = (option : string) => {
      console.log(option);
  }
  return (
    <div className='min-h-screen w-full'>
      <div className={`w-full h-100 flex items-center`} style={{ backgroundImage: `url(${BackgroundRodFai.src})` }}>
          
      </div>
      <div className='w-full h-[1100px] flex items-center justify-center'>
          <Image src={TrainMap} alt=''/>
      </div>
      {/* <Dropdown options={mockData} handleOnSelect={handleOnSelect}/> */}
    </div>
  )
}

export default Homepage