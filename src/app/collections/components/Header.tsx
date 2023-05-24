import { Gentium_Book_Plus } from "@next/font/google";
import Filter from "./Filter";
import { Products } from "../[slug]/page";
const gentiumBookPlus = Gentium_Book_Plus({
    subsets: ["latin"],
    variable: "--font-gentiumBookPlus",
    weight: "400"
})

interface PropsType {
    title: string;
    products: Products[]
}

export default function Header({ products, title }: PropsType) {

    return (
        <div className="w-[95%] flex flex-col gap-10">
            <div className={`${gentiumBookPlus.variable} font-book text-[2.5rem] capitalize`}>
                {products.length > 1 ? 'Results' : 'Result'} for '{title.replace('-', " ")}'
            </div>
            <Filter />
        </div>
    )
}
