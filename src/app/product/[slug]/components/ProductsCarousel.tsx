'use client'

import { useRef } from 'react';
// Import Swiper React components
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
// Components
import Card from './Card';

export default function Shoes() {
    const swiperRef = useRef<SwiperCore>()
    return (
        <div className='w-full mt-10 lg:mt-20'>
            <div className='w-full'>
                <div className='flex justify-center'>
                    <div className='w-[95%] flex justify-between items-center'>
                        <div className='flex gap-10'>
                            <div className=''>
                                <p className='tetx-[1.2rem] lg:text-[1.4rem] font-bold'>YOU MAY ALSO LIKE</p>
                            </div>
                        </div>
                        <div className='items-carousel-navigation flex gap-2'>
                            <button onClick={() => swiperRef.current?.slidePrev()} className='swiper-button-prev border mt-0'></button>
                            <button onClick={() => swiperRef.current?.slideNext()} className='swiper-button-next border mt-0'></button>
                        </div>
                    </div>
                </div>
                <div className='pl-[1.1rem] md:pl-[2.2rem] lg:pl-[3.4rem] mt-5'>
                    <Swiper
                        className='shadow-[0_0_0_0.1rem_rgba(206,206,206,1)]'
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={
                            { delay: 6000 }
                        }
                        breakpoints={{
                            820: {
                                slidesPerView: 4,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0
                            }
                        }}
                        slidesPerView={2}
                        spaceBetween={0}>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
