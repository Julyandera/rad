export default function FilterModal(props: any) {
    return (
        <div className="absolute top-16 z-20 bg-[rgba(225,225,225,0.5)] backdrop-blur-2xl p-5 w-[90%] lg:w-[50rem] text-[1.2rem] rounded-md shadow-md">
            <div className="flex justify-between items-center pb-3 border-b border-primary-black">
                <p>FILTERS</p>
                <button type="button" className="cursor-pointer" onClick={props.handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex flex-col gap-5 mt-10">
                <div className="flex flex-col gap-3 py-3 border-b border-primary-black">
                    <p>GENDER</p>
                    <div className="flex pl-5 gap-3">
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">MALE</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">FEMALE</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 py-3 border-b border-primary-black">
                    <p>CATEGORIES</p>
                    <div className="flex flex-wrap pl-5 gap-3">
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">FOOTWEAR</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">APPAREL</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">BAG</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 py-3 border-b border-primary-black">
                    <p>BRANDS</p>
                    <div className="flex flex-wrap pl-5 gap-3">
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">ADIDAS</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">NIKE</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">PUMA</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">VANS</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">CONVERSE</p>
                        <p className="min-w-min h-min py-2 px-10 rounded-md bg-[rgba(171,155,154,0.4)]">NEW BALANCE</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 py-3 border-b border-primary-black">
                    <p>PRICE</p>
                    <div className="flex flex-wrap pl-5 gap-5">
                        <div className="flex items-center">
                            <p className="py-3 px-4 rounded-l-md bg-[rgba(171,155,154,0.4)]">IDR</p>
                            <input className="w-72 pl-3 py-3 rounded-r-md outline-none appearance-none" type="text" name="filter-min-price" placeholder="MIN PPRICE" />
                        </div>
                        <div className="flex items-center">
                            <p className="py-3 px-4 rounded-l-md bg-[rgba(171,155,154,0.4)]">IDR</p>
                            <input className="w-72 pl-3 py-3 rounded-r-md outline-none appearance-none" type="text" name="filter-max2-price" placeholder="MAX PPRICE" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
