import React from 'react'
import Link from 'next/link'

export default function Card() {
    return (
        <Link href="/product/nike" className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
            <div className='w-full px-5'>
                <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
            </div>
            <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                <p className='truncate'>IDR 2.129.000</p>
            </div>
        </Link>
    )
}
