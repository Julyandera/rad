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
    price: number;
    slug: string;
}

export interface Sku {
    size: string;
    price: number;
    qty: number;
    product_id: number;
}

export interface DifferentColor {
    name: string;
    colorway: string;
    images: string[];
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
            price: true,
            slug: true,
        }
    })

    if (!product) {
        throw new Error()
    }

    return product
}

const fetchSizes = async (product_id: number): Promise<Sku[]> => {
    const size = await prisma.size.findMany({
        where: {
            product_id
        },
        select: {
            size: true,
            price: true,
            qty: true,
            product_id: true
        }
    })

    if (!size) {
        throw new Error()
    }

    return size
}

const fetchDifferentColor = async (name: string): Promise<DifferentColor[]> => {
    const sameProduct = await prisma.product.findMany({
        where: {
            name: {
                equals: name
            }
        },
        select: {
            name: true,
            colorway: true,
            images: true,
            slug: true
        }
    })

    if (!sameProduct) {
        throw new Error()
    }

    return sameProduct
}

export default async function ProductPage({ params }: { params: { slug: string, name: string } }) {
    const product = await fetchProductData(params.slug)
    const sku = await fetchSizes(product.id)
    const differentColor = await fetchDifferentColor(product.name)

    return (
        <div className='w-full lg:flex flex-col justify-center'>
            <Product product={product} sku={sku} differentColor={differentColor} />
            {/* <ProductsCarousel /> */}
        </div>
    );
}
