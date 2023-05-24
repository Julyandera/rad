import { Gentium_Book_Plus } from "@next/font/google";
import { PrismaClient } from "@prisma/client";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Header from "../../components/Header";

const gentiumBookPlus = Gentium_Book_Plus({
    subsets: ["latin"],
    variable: "--font-gentiumBookPlus",
    weight: "400"
});

const prisma = new PrismaClient()

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

export default async function page({ searchParams }: { searchParams: { query: string } }) {
    const products = await fetchSearchedProducts(searchParams.query)

    return (
        <div className="flex flex-col items-center gap-10">
            {products.length != 0
                ?
                <>
                    <Header title={searchParams.query} products={products} />
                    <Card products={products} />
                </>
                :
                <p className="text-[2rem] md:text-[5rem] font-bold mt-10 uppercase text-center">NO PRODUCT FOUND!!!</p>
            }
        </div>
    )
}
