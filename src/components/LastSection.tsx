import React from 'react'
import Image from 'next/image'
import Decoration from './Decoration'
import { Button } from './ui/button'

const LastSection = () => {
    return (
        <div className='bg-[#E9D5D0] pb-20'>
            <Decoration variant='secondary' />
            <div className='flex justify-around items-center px-40 gap-10 mt-20'>
                <div className='flex flex-col items-start gap-6 text-black w-1/2'>
                    <h2 className='text-5xl tracking-wider'>Присоединяйтесь сегодня</h2>
                    <p className='text-xl tracking-wider leading-8'>Станьте частью сообщества творческих инноваторов. Присоединяйтесь к нашей образовательной платформе прямо сейчас и начните свой путь к новому уровню дизайнерских возможностей!</p>
                    <Button variant={'default'} size={'xl'}>Регистрация</Button>
                </div>
                <Image
                    src={"/images/Layer 21.png"}
                    width={600}
                    height={600}
                    alt='LessonImage'
                />
            </div>
        </div>
    )
}

export default LastSection