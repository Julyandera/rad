import { Gentium_Book_Plus } from "@next/font/google";
import Filter from "./Filter";
import { Products } from "../[slug]/page";
const gentiumBookPlus = Gentium_Book_Plus({
    subsets: ["latin"],
    variable: "--font-gentiumBookPlus",
    weight: "400"
})

interface PropsType {
    title: string | undefined;
    products: Products[]
}

export default function Header({ products, title }: PropsType) {

    return (
        <div className="w-[95%] flex flex-col">
            <div className={`${gentiumBookPlus.variable} font-book text-[2.5rem] capitalize`}>
                <p>'{title?.replace('-', " ")}' {products.length > 1 ? 'Collections' : 'Collection'}</p>
            </div>
        </div>
    )
}
