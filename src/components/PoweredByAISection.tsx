import React from 'react'
import Decoration from './Decoration'
import Image from 'next/image'

const images = [
    "/images/UI1.png",
    "/images/UI2.png",
    "/images/UI3.png",
    "/images/UI4.png"
]

const PoweredByAISection = () => {
    return (
        <div className='flex flex-col bg-[#E9D5D0] items-center'>
            <Decoration variant='secondary' />
            <div className='px-40'>
                <h2 className='text-5xl text-center mt-20'>Создано искусственным интеллектом</h2>
                <p className='text-center text-xl mt-3 py-5'>Добро пожаловать в мир, где искусство и технологии соединяются, предоставляя вам уникальные ключи к творчеству. Наша платформа раскрывает потрясающие возможности использования нейронных сетей в создании пользовательских интерфейсов. Сгенерированные изображения не только служат источником вдохновения, но и становятся основой для ваших проектов, открывая безграничные горизонты для творческих экспериментов.</p>
                <div className='flex gap-8 justify-center mt-6'>
                    {images.map((image, index) => {
                        return (
                            <div key={`UIdesign${index}`} className='rounded-2xl overflow-hidden'>
                                <Image
                                    src={image}
                                    alt={`UIdesign${index}`}
                                    width={300}
                                    height={800}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PoweredByAISection