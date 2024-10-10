import React from 'react'
import AliceCarousel from 'react-alice-carousel'

function Carousel() {

    const items = [
    <video
        src="/icon-1.mp4"
        autoPlay
        loop
        muted
        className="h-24 md:h-28 lg:h-32 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
      />,
      <video
        src="/icon-2.mp4"
        autoPlay
        loop
        muted
        className="h-24 md:h-28 lg:h-32 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
      />,
      <video
        src="/icon-3.mp4"
        autoPlay
        loop
        muted
        className="h-24 md:h-28 lg:h-32 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
      />,
      <video
        src="/icon-4.mp4"
        autoPlay
        loop
        muted
        className="h-24 md:h-28 lg:h-32 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
      />,
      <video
        src="/icon-5.mp4"
        autoPlay
        loop
        muted
        className="h-24 md:h-28 lg:h-32 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
      />
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
        <div className='w-full md:w-[50vw]'>
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
