'use client'
import Link from "next/link";
import { Products } from "../../search/page";

interface PropsType {
    products: Products[]
}

export default function Card({ products }: PropsType) {
    return (
        <div className="w-[95%] grid grid-cols-2 lg:grid-cols-4 gap-[.1rem]">
            {products.map((product, index) => (
                <Link href={`/product/${product.slug}`} key={index} className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src={product.images[0]} alt={product.name} className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>{product.name}</p>
                        <p className='truncate'>
                            IDR {new Intl.NumberFormat('id-ID', { currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
