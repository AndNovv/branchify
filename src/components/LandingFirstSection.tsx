import React from 'react'

import Header from './Header'
import HeroSection from './HeroSection'
import GallerySection from './GallerySection'
import Achievments from './Achievments'

const LandingFirstSection = () => {
    return (
        <div className='w-full bg-[#101224]'>
            <Header />
            <HeroSection />
            <GallerySection />
            <Achievments />
        </div>
    )
}

export default LandingFirstSection