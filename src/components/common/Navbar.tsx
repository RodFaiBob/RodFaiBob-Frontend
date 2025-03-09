import React from 'react'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5 pr-20 pl-20'>
            <h1 className='font-logo text-3xl'>RodFireBob</h1>
            <a className='flex justify-center items-center gap-2' href="https://github.com/RodFaiBob/RodFaiBob-Backend/blob/main/app/search/search.py" target="_blank" rel="noopener noreferrer">
                <Image src="/github.png" alt="github" width={32} height={32} />
                <h1 className='font-bold text-lg'>GITHUB</h1>
                <Image src="/arrow.svg" alt="arrow" width={10} height={50} />
            </a>


        </div>
    )
}

export default Navbar