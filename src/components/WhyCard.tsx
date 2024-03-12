import React from 'react'
import Image from 'next/image'

const WhyCard = (cardProps: { title: string, text: string, image: string }) => {
    return (
        <div className='flex flex-col text-black bg-[#E9D5D0] rounded-[4rem] py-5 px-10 w-1/4 shadow-lg shadow-[#E9D5D0] hover:scale-105 transition-all cursor-pointer'>
            <h3 className='text-center text-3xl mt-4'>{cardProps.title}</h3>
            <p className='mt-4 text-lg'>{cardProps.text}</p>
            <div className='flex flex-1 justify-between items-end'>
                <Image
                    src={cardProps.image}
                    alt={'cardImage'}
                    width={150}
                    height={150}
                />
                <svg className='mb-2' xmlns="http://www.w3.org/2000/svg" height="2.2em" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
        </div>
    )
}

export default WhyCard