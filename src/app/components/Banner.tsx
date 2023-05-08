'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {
    return (
        <div className="w-full">
            <Swiper
                className='banner w-full'
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                navigation
                autoplay={
                    { delay: 5000 }
                }
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <picture>
                        <source media="only screen and (max-width: 480px) and (orientation:portrait)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_MINI_BANNER_CLOUDMONSTER_EXCLUSIVE_480x@2x.progressive.jpg?v=1681701011" />
                        <source media="only screen and (max-width: 480px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_CLOUDMONSTER_EXCLUSIVE_480x@2x.progressive.jpg?v=1681701015" />
                        <source media="only screen and (max-width: 768px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_CLOUDMONSTER_EXCLUSIVE_768x@2x.progressive.jpg?v=1681701015" />
                        <source media="only screen and (max-width: 992px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_CLOUDMONSTER_EXCLUSIVE_992x@2x.progressive.jpg?v=1681701015" />
                        <source media="only screen and (max-width: 1280px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_CLOUDMONSTER_EXCLUSIVE_1280x@2x.progressive.jpg?v=1681701015" />
                        <img src="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_CLOUDMONSTER_EXCLUSIVE_1440x@2x.progressive.jpg?v=1681701015" className='max-w-full object-cover' />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source media="only screen and (max-width: 480px) and (orientation:portrait)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_MINI_BANNER_Washed_Pink_480x@2x.progressive.jpg?v=1682375576" />
                        <source media="only screen and (max-width: 480px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_Washed_Pink_480x@2x.progressive.jpg?v=1682375576" />
                        <source media="only screen and (max-width: 768px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_Washed_Pink_768x@2x.progressive.jpg?v=1682375576" />
                        <source media="only screen and (max-width: 992px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_Washed_Pink_992x@2x.progressive.jpg?v=1682375576" />
                        <source media="only screen and (max-width: 1280px)" srcSet="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_Washed_Pink_1280x@2x.progressive.jpg?v=1682375576" />
                        <img src="//cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_Washed_Pink_1440x@2x.progressive.jpg?v=1682375576" alt="block.settings.link" className="max-w-full object-cover" />
                    </picture>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
