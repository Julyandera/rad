'use client'

import { useState } from "react";
import FilterModal from "./FilterModal";

export default function Filter({ slug }: { slug: string | undefined }) {
    const [filterModal, setFilterModal] = useState(false)

    function showFilterModal() {
        setFilterModal(prevState => !prevState)
    }

    return (
        <div className="sticky top-0">
            <div className="sticky top-0 flex gap-10">
                <div className="">
                    <button type="button" onClick={showFilterModal} className="bg-primary-gray h-12 w-min px-4 flex justify-center items-center rounded-md text-lg">FILTERS</button>
                    {filterModal && <FilterModal handleClick={showFilterModal} slug={slug} />}
                </div>
                <div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
