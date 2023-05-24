'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BannerType } from '../page';
import Link from 'next/link';

interface PropsType {
    banners: BannerType[]
}

export default function Banner({ banners }: PropsType) {
    console.log(banners)

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
                {banners.map(banner => (
                    <SwiperSlide>
                        <Link href={`/product/${banner.related_product}`} key={banner.id}>
                            <picture>
                                <source media="only screen and (max-width: 480px) and (orientation:portrait)" srcSet={banner.images[0]} />
                                <source media="only screen and (max-width: 480px)" srcSet={banner.images[1]} />
                                <source media="only screen and (max-width: 768px)" srcSet={banner.images[2]} />
                                <source media="only screen and (max-width: 992px)" srcSet={banner.images[3]} />
                                <source media="only screen and (max-width: 1280px)" srcSet={banner.images[4]} />
                                <img src={banner.images[5]} className='max-w-full object-cover' />
                            </picture>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
