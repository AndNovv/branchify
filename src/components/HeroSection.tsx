import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='flex justify-around items-center px-40 mt-10 gap-10'>
            <div className='text-white w-1/2'>
                <h2 className='text-5xl tracking-wider'>Откройте дверь в будущее дизайна</h2>
                <p className='text-xl mt-6 tracking-wider leading-8'>Погрузитесь в мир инновационных техник и приемов, используя мощь нейронных сетей для создания удивительных пользовательских интерфейсов.</p>
            </div>
            <Image
                src={"/images/Layer 15.png"}
                width={600}
                height={600}
                alt='LessonImage'
            />
        </div>
    )
}

export default HeroSection