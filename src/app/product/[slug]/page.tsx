// Components
import { PrismaClient } from '@prisma/client';
import Product from './components/Product';
import ProductsCarousel from './components/ProductsCarousel'

const prisma = new PrismaClient()

export interface Product {
    id: number;
    name: string;
    colorway: string;
    images: string[];
    description: string;
    sku: string | number | any;
    price: number;
    slug: string;
}

const fetchProductData = async (slug: string): Promise<Product> => {
    const product = await prisma.product.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            colorway: true,
            images: true,
            description: true,
            sku: true,
            price: true,
            slug: true
        }
    })

    if (!product) {
        throw new Error()
    }

    return product
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await fetchProductData(params.slug)

    return (
        <div className='w-full lg:flex flex-col justify-center'>
            <Product product={product} />
            <ProductsCarousel />
        </div>
    );
}
