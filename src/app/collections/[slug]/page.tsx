import Card from "../components/Card";
import { PrismaClient } from "@prisma/client";
import Header from "../components/Header";

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

export default async function Collections({ params }: { params: { slug: string } }) {
    const products = await fetchProducts()
    console.log(params.slug)
    return (
        <div className="flex flex-col items-center gap-10">
            {products.length != 0
                ?
                <>
                    <Header title={params.slug} products={products} />
                    <Card products={products} />
                </>
                :
                <p className="text-[2rem] md:text-[5rem] font-bold mt-10 uppercase text-center">NO PRODUCT FOUND!!!</p>
            }
        </div>
    )
}
