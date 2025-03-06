'use client'
import Dropdown from '@/components/common/dropdown'
import Image from 'next/image'
import React from 'react'
import BackgroundRodFai from '@/assets/home/BackgroundRodFai.svg'

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
      <div className={`w-full h-30 flex items-center`} style={{backgroundImage: BackgroundRodFai}}>
          {/* <Image src={BackgroundRodFai} alt='background' width={0} height={422} style={{ width: "100%" }} /> */}
      </div>
      {/* <Dropdown options={mockData} handleOnSelect={handleOnSelect}/> */}
    </div>
  )
}

export default Homepage