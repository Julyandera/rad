import Card from "../components/Card";
import { PrismaClient } from "@prisma/client";
import Header from "../components/Header";
import Filter from "../components/Filter";

const prisma = new PrismaClient()

export interface Products {
    id: number,
    name: string,
    images: string[],
    price: number,
    colorway: string,
    slug: string,
    category_id: number,
    gender_id: number
}

const fetchProducts = async () => {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            images: true,
            price: true,
            colorway: true,
            slug: true,
            category_id: true,
            gender_id: true,
        }
    })

    return products
}

const fetchSearchedProducts = async (query: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query.toUpperCase()
            }
        },
        select: {
            id: true,
            name: true,
            images: true,
            price: true,
            colorway: true,
            slug: true,
            category_id: true,
            gender_id: true,
        }
    })

    return products
}

export default async function Collections({ params, searchParams }: { params?: { slug: string }, searchParams?: { query: string } }) {
    let products: Products[]
    let title: string | undefined

    if (searchParams?.query != undefined) {
        products = await fetchSearchedProducts(searchParams.query)
        title = searchParams.query
    } else {
        products = await fetchProducts()
        title = params?.slug
    }

    return (
        <div className="flex justify-center items-center">
            {products.length != 0
                ?
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[95%] flex flex-col gap-10 relative">
                        <Header title={title} products={products} />
                        <Filter slug={title} />
                        <Card products={products} />
                    </div>
                </div>
                :
                <p className="text-[2rem] md:text-[5rem] font-bold mt-10 uppercase text-center">NO PRODUCT FOUND!!!</p>
            }
        </div>
    )
}
