import React from 'react'

type variantType = 'primary' | 'secondary'

const Decoration = ({ variant }: { variant: variantType }) => {

    const color = variant === 'primary' ? '#E9D5D0' : '#101224'
    return (
        <div className={`bg-[${color}] h-40 rounded-b-full w-full`}></div>
    )
}

export default Decoration