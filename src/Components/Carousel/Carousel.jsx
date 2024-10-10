import React from 'react'
import AliceCarousel from 'react-alice-carousel'

function Carousel() {

    const items = [
    <img src="/Icon/1.png" alt="Slide-1" className='h-20 hover:h-24 cursor-pointer'/>,
    <img src="/Icon/2.png" alt="Slide-2" className='h-20 hover:h-24 cursor-pointer'/>,
    <img src="/Icon/3.png" alt="Slide-3" className='h-20 hover:h-24 cursor-pointer'/>,
    <img src="/Icon/4.png" alt="Slide-4" className='h-20 hover:h-24 cursor-pointer'/>,
    <img src="/Icon/5.png" alt="Slide-5" className='h-20 hover:h-24 cursor-pointer'/>,
    <img src="/Icon/6.png" alt="Slide-6" className='h-20 hover:h-24 cursor-pointer'/>
    ]

    const responsive = {
        0: {
            items: 2,
        },
        512: {  
            items: 4,
        }
    }

    return (
        <div className='w-full md:w-[50vw] h-20'>
            <AliceCarousel
        mouseTracking
            infinite
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            autoPlay
            responsive={responsive}
            items={items}
        />
        </div>
    )
}

export default Carousel
