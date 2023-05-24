import React from 'react'
import Link from 'next/link'
import { ProductType } from '../page'

interface PropsType {
    products: ProductType
}

export default function Card({ products }: PropsType) {
    const price = new Intl.NumberFormat('id-ID', { currency: 'IDR', minimumFractionDigits: 0 }).format(products.price)

    return (
        <Link key={products.id} href={`/product/${products.slug}`} className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
            <div className='w-full px-5'>
                <img src={products.images[0]} alt="" className='object-cover' />
            </div>
            <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                <p className='truncate'>{products.name}</p>
                <p className='truncate'>IDR {price}</p>
            </div>
        </Link>
    )
}
