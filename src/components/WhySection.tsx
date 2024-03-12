import React from 'react'
import WhyCard from './WhyCard'
import Decoration from './Decoration'

const cardsData = [
    {
        title: 'Эксклюзивные техники',
        text: 'Изучите уникальные методы, недоступные на других платформах, разработанные ведущими экспертами в области дизайна и искусственного интеллекта',
        image: '/images/Layer 17.png'
    },
    {
        title: 'Интерактивные уроки',
        text: 'Наш подход объединяет теорию и практику, предоставляя вам возможность мгновенно применить новые знания в ваших проектах',
        image: '/images/Layer 18.png'
    },
    {
        title: 'Современный формат',
        text: 'Онлайн-курсы, вебинары и доступ к эксклюзивным материалам гарантируют, что вы останетесь впереди времени в мире дизайна',
        image: '/images/Layer 20.png'
    },
]

const WhySection = () => {
    return (
        <div className='w-full bg-[#101224]'>
            <Decoration variant={'primary'} />
            <h2 className='text-5xl text-[#E9D5D0] mt-20 text-center'>Почему Branchify?</h2>
            <div className='flex justify-center gap-8 mt-16'>
                {cardsData.map((card, index) => {
                    return <WhyCard {...card} key={`whyCard${index}`} />
                })}
            </div>
        </div>
    )
}

export default WhySection