'use client'

import { useState } from "react"

export default function MenuPanel(props: any) {
    const showMenu = props.display ? "" : "hidden"
    const [allMenu, setAllMenu] = useState(true)
    const [menMenu, setMenMenu] = useState(false)
    const [womenMenu, setWomenMenu] = useState(false)
    const [brandsMenu, setBrandsMenu] = useState(false)

    function displayMenMenu() {
        setMenMenu(prevState => !prevState)
        setAllMenu(prevState => !prevState)
    }

    function displayWomenMenu() {
        setWomenMenu(prevState => !prevState)
        setAllMenu(prevState => !prevState)
    }

    function displayBrandsMenu() {
        setAllMenu(prevState => !prevState)
        setBrandsMenu(prevState => !prevState)
    }

    return (
        <div className={`${showMenu} w-screen h-screen bg-white flex justify-center relative`}>
            {allMenu &&
                <div className="w-[95%] mt-3 flex flex-col gap-10 text-3xl">
                    <div>
                        <div className="flex items-center justify-between">
                            <p>MEN</p>
                            <div onClick={displayMenMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-w-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>WOMEN</p>
                        <div onClick={displayWomenMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-w-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">FOOTWEAR</div>
                    <div className="flex items-center justify-between">APPAREL</div>
                    <div className="flex items-center justify-between">BAGS</div>
                    <div className="flex items-center justify-between">
                        <p>BRANDS</p>
                        <div onClick={displayBrandsMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-w-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">LOGIN</div>
                    <div className="flex items-center justify-between">WISHLIST [0]</div>
                </div>
            }
            {menMenu &&
                <div className="w-11/12 flex flex-col gap-5 text-3xl">
                    <div className="flex items-center gap-5 border-b-[.1rem] border-[#cecece] py-3">
                        <div onClick={displayMenMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <p>MEN</p>
                    </div>
                    <div className="ml-14 flex flex-col gap-10">
                        <p>FOOTWEAR</p>
                        <p>APPAREL</p>
                        <p>BAGS</p>
                    </div>
                </div>
            }
            {womenMenu &&
                <div className="w-11/12 flex flex-col gap-5 text-3xl">
                    <div className="flex items-center gap-5 border-b-[.1rem] border-[#cecece] py-3">
                        <div onClick={displayWomenMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <p>WOMEN</p>
                    </div>
                    <div className="ml-14 flex flex-col gap-10">
                        <p>FOOTWEAR</p>
                        <p>APPAREL</p>
                        <p>BAGS</p>
                    </div>
                </div>
            }
            {brandsMenu &&
                <div className="w-11/12 flex flex-col gap-5 text-3xl">
                    <div className="flex items-center gap-5 border-b-[.1rem] border-[#cecece] py-3">
                        <div onClick={displayBrandsMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <p>BRANDS</p>
                    </div>
                    <div className="ml-14 flex flex-col gap-10">
                        <p>NIKE</p>
                        <p>ADIDAS</p>
                        <p>PUMA</p>
                        <p>CONVERSE</p>
                        <p>VANS</p>
                        <p>NEW BALANCE</p>
                    </div>
                </div>
            }
        </div>
    )
}
