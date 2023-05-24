"use client";

import Link from "next/link";
import { useState } from "react";
import { Gentium_Book_Plus } from "next/font/google";
import MenuPanel from "./MenuPanel";
import SearchModal from "./SearchModal";

const gentiumBookPlus = Gentium_Book_Plus({
    subsets: ["latin"],
    variable: "--font-gentiumBookPlus",
    weight: "400"
});

export default function NavBar() {
    const [menuPanel, setMenuPanel] = useState(false);
    const [navBackground, setNavBackground] = useState(false);
    const [searchModal, setSearchModal] = useState(false)

    function displayNavBackground() {
        setNavBackground(true);
    }

    function hideDisplayNavBackground() {
        setNavBackground(false);
    }

    function displayMenuPanel() {
        setMenuPanel((prevState) => !prevState);
    }

    function displaySearchModal() {
        setSearchModal((prevState) => !prevState);
    }

    return (
        <nav className="w-full h-[60px] lg:h-[100px] bg-white fixed top-0 left-0 right-0 z-50">
            <div className="w-full flex flex-col justify-center items-center pt-6 pb-3 gap-3">
                {navBackground && (
                    <div className="absolute bg-[rgba(0,0,0,0.4)] h-screen w-full top-full"></div>
                )}
                <div className="w-[95%] flex">
                    <div className="w-1/3 lg:w-5/12 flex items-center">
                        <div
                            className="visible lg:invisible"
                            onClick={displayMenuPanel}
                        >
                            {!menuPanel && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                            {menuPanel && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>

                    <div className="w-1/3 lg:w-1/6 flex justify-center items-center text-4xl">
                        <Link
                            href="/"
                            className={`${gentiumBookPlus.variable} font-book flex items-center text-6xl lg:text-6xl`}
                        >
                            Rad
                        </Link>
                    </div>

                    <div className="w-1/3 lg:w-5/12 flex items-center">
                        <div className="w-full flex justify-end items-center gap-5 md:gap-10 lg:gap-8">
                            <button type="button" className="search cursor-pointer" onClick={displaySearchModal}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10 lg:w-7 lg:h-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>

                            <Link href={`/user-name/wishlist`} className="hidden lg:flex wishlist cursor-pointer">
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
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </Link>

                            <Link href={`/user-name/bag`} className="bag cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10 lg:w-7 lg:h-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </Link>

                            <Link href='/login' className="user hidden lg:flex cursor-pointer">
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
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-panel hidden lg:flex justify-center gap-10 text-[1.3rem]">
                    <div
                        className="group/male"
                        onMouseEnter={displayNavBackground}
                        onMouseLeave={hideDisplayNavBackground}
                    >
                        <Link href={`/collections/male`} className="cursor-pointer hover:underline h-12 group-hover/male:bg-primary-sand grid place-items-center px-8 rounded-md">
                            MALE
                        </Link>
                        <div className="w-screen duration-200 invisible group-hover/male:visible absolute flex justify-center backdrop-blur-md bg-white left-0">
                            <div className="w-11/12 grid place-items-center grid-cols-3 my-10">
                                <Link href={`/collections/male-footwear`} className="cursor-pointer hover:underline">
                                    FOOTWEAR
                                </Link>
                                <Link href={`/collections/male-apparel`} className="cursor-pointer hover:underline">
                                    APPAREL
                                </Link>
                                <Link href={`/collections/male-bags`} className="cursor-pointer hover:underline">
                                    BAGS
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group/female"
                        onMouseEnter={displayNavBackground}
                        onMouseLeave={hideDisplayNavBackground}
                    >
                        <Link href={`/collections/female`} className="cursor-pointer hover:underline h-12 group-hover/female:bg-primary-sand grid place-items-center px-8 rounded-md">
                            FEMALE
                        </Link>
                        <div className="w-screen duration-200 invisible group-hover/female:visible absolute flex justify-center backdrop-blur-md bg-white left-0">
                            <div className="w-11/12 grid place-items-center grid-cols-3 my-10">
                                <Link href={`/collections/female-footwear`} className="cursor-pointer hover:underline">
                                    FOOTWEAR
                                </Link>
                                <Link href={`/collections/female-footwear`} className="cursor-pointer hover:underline">
                                    APPAREL
                                </Link>
                                <Link href={`/collections/female-footwear`} className="cursor-pointer hover:underline">
                                    BAGS
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={`/collections/footwear`} className="cursor-pointer hover:underline h-12 hover:bg-primary-sand grid place-items-center px-8 rounded-md">
                            FOOTWEAR
                        </Link>
                    </div>
                    <div>
                        <Link href={`/collections/apparel`} className="cursor-pointer hover:underline h-12 hover:bg-primary-sand grid place-items-center px-8 rounded-md">
                            APPAREL
                        </Link>
                    </div>
                    <div>
                        <Link href={`/collections/bags`} className="cursor-pointer hover:underline h-12 hover:bg-primary-sand grid place-items-center px-8 rounded-md">
                            BAGS
                        </Link>
                    </div>
                    <div
                        className="group/brands"
                        onMouseEnter={displayNavBackground}
                        onMouseLeave={hideDisplayNavBackground}
                    >
                        <span className="hover:underline h-12 group-hover/brands:bg-primary-sand grid place-items-center px-8 rounded-md">
                            BRANDS
                        </span>
                        <div className="w-screen duration-200 invisible group-hover/brands:visible absolute flex justify-center backdrop-blur-md bg-white left-0">
                            <div className="w-11/12 grid place-items-center grid-cols-3 gap-5 my-10">
                                <Link href={`/collections/nike`} className="cursor-pointer hover:underline">
                                    NIKE
                                </Link>
                                <Link href={`/collections/adidas`} className="cursor-pointer hover:underline">
                                    ADDIDAS
                                </Link >
                                <Link href={`/collections/puma`} className="cursor-pointer hover:underline">
                                    PUMA
                                </Link >
                                <Link href={`/collections/converse`} className="cursor-pointer hover:underline">
                                    CONVERSE
                                </Link >
                                <Link href={`/collections/vans`} className="cursor-pointer hover:underline">
                                    VANS
                                </Link >
                                <Link href={`/collections/new-balance`} className="cursor-pointer hover:underline">
                                    NEW BALANCE
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
                <MenuPanel display={menuPanel} />
            </div>
            {searchModal && <SearchModal handleClick={displaySearchModal} />}
        </nav>
    );
}
