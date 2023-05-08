export default function RegisterForm(props: any) {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-[1.2rem] lg:text-[1.4rem]">REGISTER A NEW ACCOUNT</p>
            <form action="" className="flex flex-col gap-7 text-xl">
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="registerForm-firstName" type="text" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="registerForm-firstName" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6  left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">First Name</label>
                </div>
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="registerForm-lastName" type="text" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="registerForm-lastName" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Last Name</label>
                </div>
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="registerForm-email" type="email" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="registerForm-email" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Email Address</label>
                </div>
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="registerForm-password" type="password" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="registerForm-password" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Password</label>
                </div>
                <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                    <input id="registerForm-confirmPassword" type="password" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                    <label htmlFor="registerForm-confirmPassword" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Confirm Password</label>
                </div>
                <div className="bg-primary-black text-white w-56 h-12 rounded-md grid place-items-center">
                    <button type="submit">
                        REGISTER ACCOUNT
                    </button>
                </div>
            </form>
            <div className="text-[1.2rem] lg:text-[1.3rem]">
                <p>Already have an account ? <span className="hover:underline cursor-pointer" onClick={props.handleClick}>Login here.</span></p>
            </div>
        </div>
    )
}
