"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

import { Product } from "../page";

interface Props {
    product: Product
}

export default function Product({ product }: Props) {
    const [fullDesc, setFullDesc] = useState(false);
    const [wishlist, setWishlist] = useState(false)
    const price = new Intl.NumberFormat('id-ID', { currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)

    console.log(product.sku[3])
    return (
        <div className="w-full flex justify-center mt-1">
            <div className="w-full lg:w-[95%] lg:flex justify-between gap-5">
                <div className="product-images lg:w-3/4">
                    <div className="lg:hidden">
                        <Swiper
                            className='w-full lg:hidden'
                            modules={[Navigation, Pagination]}
                            loop={true}
                            navigation
                            pagination={{ clickable: true }}
                            spaceBetween={0}
                            slidesPerView={1}
                        >
                            {product.images.map(image => (
                                <SwiperSlide>
                                    <img
                                        src={image}
                                        alt={product.name}
                                        className='object-cover'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-full hidden lg:grid gap-[0.1rem] grid-cols-2">
                        {product.images.map((image, index) => (
                            <div className="relative">
                                <p className="absolute left-6 top-6">{`[${index + 1}/${product.images.length}]`}</p>
                                <img src={image} alt={product.name} className="object-cover bg-white shadow-[0_0_0_0.1rem_rgba(206,206,206,1)]" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='product-detail flex justify-center lg:w-1/4 mt-5 lg:mt-0 h-min lg:sticky lg:top-[9.5rem]'>
                    <div className="w-[95%] lg:w-full flex flex-col gap-5 lg:gap-10">
                        <div className='w-full description flex flex-col gap-3'>
                            <p className='text-[1.8rem] leading-[1]'>
                                {product.name}
                            </p>
                            <p className='text-[1.4rem] leading-[1]'>
                                {product.colorway}
                            </p>
                            <p className='text-[2rem] leading-[1]'>IDR {price}</p>
                            <p className='text-[1.2rem] leading-[1.45] text-justify tracking-tighter'>
                                {fullDesc ? product.description : product.description.substring(0, 114) + "..."}
                                <span
                                    className='hover:underline cursor-pointer'
                                    onClick={() => setFullDesc(!fullDesc)}
                                >
                                    {fullDesc ? " Read less" : " Read more"}
                                </span>
                            </p>
                        </div>
                        <div className='colorway'>
                            <p className='text-[1.3rem]'>COLORS:</p>
                            <div className='flex gap-5 items-center mt-3'>
                                <div className='w-24 h-w-24 rounded-md cursor-pointer hover:border border-black'>
                                    <img
                                        src='https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHCFH001-2000_1360x.png?v=1677814825'
                                        alt=''
                                        className='object-cover'
                                    />
                                </div>
                                <div className='w-24 h-w-24 rounded-md cursor-pointer hover:border border-black'>
                                    <img
                                        src='https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHCFH001-2000_1360x.png?v=1677814825'
                                        alt=''
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='sizes'>
                            <p className='text-[1.3rem]'>SIZES (US):</p>
                            <div className='flex items-center gap-3 mt-3'>
                                {/* {product.sku.map(index => (
                                    <div className='bg-primary-gray w-14 h-14 flex items-center justify-center rounded-md'>
                                        <input type="radio" name="size" id="size-6" value="size-6" className='hidden peer' disabled />
                                        <label htmlFor="size-6" className='grid place-items-center rounded-md text-[1.2rem] lg:text-[1.3rem] w-full h-full cursor-pointer peer-checked:bg-primary-black peer-checked:text-white'>
                                            {index["size"]}
                                            <p className="text-[1rem] lg:text-[1.1rem]">SOLD</p>
                                        </label>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-64 h-14 bg-primary-black flex items-center justify-center rounded-md cursor-pointer'>
                                <p className='text-white text-[1.3rem]'>
                                    ADD TO BAG
                                </p>
                            </div>
                            <div
                                className='group min-w-min h-14 bg-primary-gray flex items-center px-3 rounded-md cursor-pointer'
                                onClick={() => setWishlist(prevState => !prevState)}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill={wishlist ? 'red' : 'none'}
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='h-8 w-8'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                                    />
                                </svg>
                                <span className="text-[1.3rem] w-0 overflow-hidden group-hover:w-28 transition-[width] duration-300 ease-out">
                                    <p className="pl-3">WISHLIST</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
