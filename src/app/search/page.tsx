import Card from "../collections/components/Card";
import { Gentium_Book_Plus } from "@next/font/google";
import { PrismaClient } from "@prisma/client";
import Filter from "../collections/components/Filter";

const gentiumBookPlus = Gentium_Book_Plus({
    subsets: ["latin"],
    variable: "--font-gentiumBookPlus",
    weight: "400"
});

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

const fetchSearchedProducts = async (query: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query
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

export default async function Collections({ searchParams }: { searchParams: { query: string } }) {
    const products = await fetchSearchedProducts(searchParams.query.toUpperCase())

    return (
        <div className="flex flex-col items-center gap-10">
            {products.length != 0
                ?
                <>
                    <div className="w-[95%] flex flex-col gap-10">
                        <div className={`${gentiumBookPlus.variable} font-book text-[2.5rem] capitalize`}>
                            {products.length > 1 ? 'Results' : 'Result'} for '{searchParams.query}'
                        </div>
                        <Filter />
                    </div>
                    <Card products={products} />
                </>
                :
                <p className="text-[2rem] md:text-[5rem] font-bold mt-10 uppercase text-center">NO PRODUCT FOUND!!!</p>
            }
        </div>
    )
}
