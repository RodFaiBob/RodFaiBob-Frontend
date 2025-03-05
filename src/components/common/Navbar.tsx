import React from 'react'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-10'>
            <h1 className='font-logo text-5xl'>RodFireBob</h1>

            <div className='flex justify-center items-center gap-2'>
                <Image src="/github.png" alt="github" width={60} height={200} />
                <h1 className=' font-bold'>GITHUB</h1>
                <Image src="/arrow.svg" alt="arrow" width={10} height={50} />
            </div>


        </div>
    )
}

export default Navbar