'use client'

import Link from "next/link"

export default function LoginForm(props: any) {
    console.log(props)
    return (
        <div className="flex flex-col gap-5">
            <p className="text-[1.2rem] lg:text-[1.4rem]">SIGN IN TO YOUR ACCOUNT</p>
            <form action="" className="flex flex-col gap-7 text-xl">
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="loginForm-email" type="email" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="loginForm-email" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6  left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Email Address</label>
                </div>
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="loginForm-password" type="password" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="loginForm-password" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Password</label>
                </div>
                <div className="bg-primary-black text-white w-36 h-12 rounded-md grid place-items-center">
                    <button type="submit">
                        SIGN IN
                    </button>
                </div>
            </form>
            <div className="text-[1.2rem] lg:text-[1.3rem]">
                <Link href='' className="hover:underline">Forgot password ?</Link>
            </div>
            <div className="text-[1.2rem] lg:text-[1.3rem]">
                <p>New user ? <span className="hover:underline cursor-pointer" onClick={props.handleClick}>Create new account here.</span></p>
            </div>
        </div>
    )
}
