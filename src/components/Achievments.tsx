import React from 'react'


const achievmentsData = [
    {
        title: '36',
        text: 'Большая библиотека образовательных материалов и тестов по применению нейронных сетей в UI дизайне'
    },
    {
        title: '100+',
        text: 'Более сотни успешных проектов, воплотившие в жизнь творческие и инновационные идеи учеников'
    },
    {
        title: '10k+',
        text: 'Более 10 тысяч активных учеников, доверяющих Branchify'
    },
]


const Achievments = () => {
    return (
        <div className='flex justify-between bg-[#E9D5D0] rounded-[5rem] mx-40 mt-20 relative divide-x-2 divide-[#DAC7C3] shadow-lg shadow-[#E9D5D0]'>

            {achievmentsData.map((achievment, index) => {
                return (
                    <div className='flex flex-col flex-1 items-center px-10 pb-10' key={`achievment${index}`}>
                        <h3 className='text-black text-4xl py-10'>{achievment.title}</h3>
                        <div className='flex flex-1 items-center'>
                            <p className='text-[#5F5F5F] text-center text-lg'>{achievment.text}</p>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Achievments