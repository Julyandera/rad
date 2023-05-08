import { Gentium_Book_Plus } from "@next/font/google";

const gentiumBookPlus = Gentium_Book_Plus({
    subsets: ["latin"],
    variable: "--font-gentiumBookPlus",
    weight: "400"
});

export default function Collections() {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-[95%] flex flex-col gap-10">
                <div className={`${gentiumBookPlus.variable} font-book text-[2.5rem]`}>Mens's Footwear</div>
                <div className="flex gap-10">
                    <div className="bg-primary-gray h-12 w-min px-4 flex justify-center items-center rounded-md text-lg">FILTERS</div>
                    <div className="">
                        <div className="group absolute bg-primary-gray min-h-[3rem] min-w-min px-4 flex justify-center items-center gap-2 rounded-md text-lg overflow-y-hidden">
                            <span>SORT BY:</span>
                            <div className="flex items-center gap-1">
                                <div>
                                    <span>RECOMMENDED</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-0 group-hover:rotate-180 transition-all ease-in duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            {/* <span>NEWEST</span>
                            <span>PRICE LOW TO HIGH</span>
                            <span>PRICE HIGH TO LOW</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[95%] grid grid-cols-2 lg:grid-cols-4 gap-[.1rem]">
                <div className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                        <p className='truncate'>IDR 2.129.000</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                        <p className='truncate'>IDR 2.129.000</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                        <p className='truncate'>IDR 2.129.000</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                        <p className='truncate'>IDR 2.129.000</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                        <p className='truncate'>IDR 2.129.000</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 shadow-[0_0_0_0.1rem_rgba(206,206,206,1)] py-5'>
                    <div className='w-full px-5'>
                        <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DZ2820-601-PHSLH000-2000_1360x.jpg?v=1677814826" alt="" className='object-cover' />
                    </div>
                    <div className='text-[1.1rem] lg:text-xl max-w-full px-5'>
                        <p className='truncate'>NIKE W AIR JORDAN 1 MID SE</p>
                        <p className='truncate'>IDR 2.129.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
