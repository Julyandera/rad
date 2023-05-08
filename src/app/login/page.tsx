'use client'

import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

export default function loginPage() {
    const [activeForm, setActiveForm] = useState(true)

    function changeForm() {
        setActiveForm(prevState => !prevState)
        console.log(activeForm)
    }

    return (
        <div className="h-full flex justify-center items-center mt-10">
            {activeForm ?
                <LoginForm handleClick={changeForm} /> : <RegisterForm handleClick={changeForm} />
            }
        </div>
    )
}
