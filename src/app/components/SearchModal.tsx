export default function SearchModal(props: any) {
    return (
        <div className="fixed w-screen h-screen top-0 z-20 bg-[rgba(0,0,0,0.4)] flex justify-center items-center pt-[60px]">
            <div className="h-3/4 w-3/4 bg-white rounded-md flex flex-col items-center gap-3 py-5 overflow-y-auto">
                <div className="flex w-11/12 justify-end">
                    <div className="cursor-pointer" onClick={props.handleClick}>
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
                    </div>
                </div>
                <div className="w-11/12 lg:w-4/5">
                    <form action="">
                        <div className="flex items-center justify-center rounded-full gap-5">
                            <input type="text" className="bg-secondary-gray w-11/12 h-16 text-2xl outline-none rounded-md px-5 uppercase" placeholder="SEARCH RAD" />
                            <button className="search bg-primary-black flex items-center justify-center w-24 h-16 text-white rounded-md">
                                SEARCH
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
