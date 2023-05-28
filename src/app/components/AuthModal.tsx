'use client'

import { useState } from "react"

export default function AuthModal(props: any) {
    const [form, setForm] = useState(true)
    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    function handleFormInputs(e: React.ChangeEvent<HTMLInputElement>) {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }

    function changeForm() {
        setForm(prevState => !prevState)
    }

    return (
        <div className="w-screen h-screen fixed top-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
            <div className="flex flex-col items-center gap-5 bg-white p-10 rounded-md">
                <div className="w-full flex justify-between items-center">
                    <p className="text-[1.2rem] lg:text-[1.4rem]">{form ? 'LOGIN TO YOUR ACCOUNT' : 'REGISTER A NEW ACCOUNT'}</p>
                    <button type="button" className="cursor-pointer" onClick={props.handleClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <form action="" className="flex flex-col gap-7 text-xl">
                    {!form &&
                        <div className="flex justify-between items-center">
                            <div className="bg-secondary-gray flex justify-center items-center w-[14.5rem] h-20 rounded-md relative text-[1.3rem]">
                                <input value={formInputs.firstName} onChange={handleFormInputs} name="firstName" id="firstName" type="text" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                                <label htmlFor="firstName" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6  left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">First Name</label>
                            </div>
                            <div className="bg-secondary-gray flex justify-center items-center w-[14.5rem] h-20 rounded-md relative text-[1.3rem]">
                                <input value={formInputs.lastName} onChange={handleFormInputs} name="lastName" id="lastName" type="text" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                                <label htmlFor="lastName" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Last Name</label>
                            </div>
                        </div>}
                    <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                        <input value={formInputs.email} onChange={handleFormInputs} name="email" id="email" type="email" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                        <label htmlFor="email" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Email Address</label>
                    </div>
                    <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                        <input value={formInputs.password} onChange={handleFormInputs} name="password" id="password" type="password" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                        <label htmlFor="password" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Password</label>
                    </div>
                    {!form &&
                        <div className="bg-secondary-gray flex justify-center items-center w-[30rem] h-20 rounded-md relative text-[1.3rem]">
                            <input value={formInputs.confirmPassword} onChange={handleFormInputs} name="confirmPassword" id="confirmPassword" type="password" className="peer w-full h-full bg-secondary-gray outline-none rounded-md text-[1.3rem] p-5" placeholder=" " />
                            <label htmlFor="confirmPassword" className="text-[rgba(0,0,0,0.65)] absolute peer-placeholder-shown:translate-y-0 -translate-y-6 left-5 peer-placeholder-shown:text-[1.3rem] text-[1rem]">Confirm Password</label>
                        </div>
                    }
                    <div>
                        {form ?
                            <button type="submit" className="bg-primary-black text-white w-min h-12 px-5 rounded-md grid place-items-center">
                                LOGIN
                            </button>
                            :
                            <button type="submit" className="bg-primary-black text-white w-min h-12 px-5 rounded-md grid place-items-center whitespace-nowrap">
                                REGISTER ACCOUNT
                            </button>}
                    </div>
                </form>
                <div className="text-[1.2rem] lg:text-[1.3rem]">
                    <p>{form ? 'Don\'t have an account ?' : 'Already have an account ?'} <button type="button" className="hover:underline" onClick={changeForm}>{form ? 'Register Here.' : 'Login here.'}</button></p>
                </div>
            </div>
        </div>
    )
}
