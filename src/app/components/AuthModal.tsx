'use client'

import { useContext, useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { authContext } from "../context/AuthContext"

export default function AuthModal(props: any) {
    const [form, setForm] = useState(true)
    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const [disabledButton, setDisabledButton] = useState(true)
    const { signIn, signUp } = useAuth()
    const { isLoading, isError, data } = useContext(authContext);


    function handleFormInputs(e: React.ChangeEvent<HTMLInputElement>) {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }

    function changeForm() {
        setForm(prevState => !prevState)
    }

    useEffect(() => {
        if (form) {
            if (formInputs.email && formInputs.password) {
                return setDisabledButton(false)
            }
        }
        else {
            if (formInputs.firstName && formInputs.lastName && formInputs.email && formInputs.password) {
                return setDisabledButton(false)
            }
        }
        return setDisabledButton(true)
    }, [form, formInputs])

    function submitForm() {
        if (form) {
            signIn({ email: formInputs.email, password: formInputs.password }, props.handleClick)
        } else {
            signUp({ firstName: formInputs.firstName, lastName: formInputs.lastName, email: formInputs.email, password: formInputs.password })
        }
    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
            <div className="flex flex-col items-center gap-5 bg-white p-10 rounded-md">
                <div className="w-full flex justify-between items-center">
                    <p className="text-[1.2rem] lg:text-[1.4rem]">{form ? 'Sign In' : 'Sign Up'}</p>
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
                {data?.firstName}
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
                    {isError &&
                        <div className="flex items-center gap-3 text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex items-center justify-center" width="15" height="15" fill="red" viewBox="0 0 32 32" id="error">
                                <path d="M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16zm2-14a2 2 0 0 1-4 0V8a2 2 0 0 1 4 0v10zm-2 3.968a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 21.968z">
                                </path>
                            </svg>
                            {isError}
                        </div>}
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={submitForm} className="bg-primary-black disabled:bg-primary-gray text-white w-min h-12 px-5 rounded-md flex items-center gap-3 justify-around whitespace-nowrap" disabled={disabledButton}>
                            {form ? "Sign In" : "Sign Up"}
                            {isLoading &&
                                <div className="animate-spin h-6 w-6 bg-white rounded-full p-[.15rem]">
                                    <div className="h-2 w-2 rounded-full bg-primary-black"></div>
                                </div>
                            }
                        </button>

                    </div>
                </form>
                <div className="text-[1.2rem] lg:text-[1.3rem]">
                    <p>{form ? 'Don\'t have an account ?' : 'Already have an account ?'} <button type="button" className="hover:underline" onClick={changeForm}>{form ? 'Sign Up.' : 'Sign In.'}</button></p>
                </div>
            </div>
        </div>
    )
}
