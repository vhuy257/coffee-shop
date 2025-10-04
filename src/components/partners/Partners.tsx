import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';

const Partners = () => {
    const data = [
        'img-1.png',
        'img-2.png',
        'img-3.png',
        'img-4.png',
        'img-5.png',
    ]

    return (
        <div className="partners style-1">
            <div className="themesflat-container full">
                <div className="flex">
                    <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={124}
                        slidesPerView={'auto'}                        
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}        
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            }
                        }}           
                        observer={true}
                        observeParents={true}      
                        speed={10000}              
                        loop={true}
                        grabCursor={true}   
                        className='auto-slide'
                    >
                        {data.map((k: any, index: number) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">                 
                                <Link href="#" className="flex items-center justify-center">
                                    <Image src={'/coffee-shop/' + k} alt="" width={230} height={74} className='object-cover'/>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners