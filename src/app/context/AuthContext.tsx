'use client'
import { useState, createContext, useEffect } from "react"
import axios from "axios";
import { getCookie } from "cookies-next";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string
}

interface Auth {
    isLoading: boolean;
    isError: string | null;
    data: User | null;
}

interface AuthState extends Auth {
    setAuthState: React.Dispatch<React.SetStateAction<Auth>>
}

export const authContext = createContext<AuthState>({
    isLoading: false,
    isError: null,
    data: null,
    setAuthState: () => { }
})

export default function AuthContext({ children }: { children: React.ReactNode }) {
    const [authState, setAuthState] = useState<Auth>({
        isLoading: false,
        isError: null,
        data: null,
    })

    const fetchUser = async () => {
        setAuthState({
            isLoading: true,
            isError: null,
            data: null,
        });
        try {
            const jwt = getCookie("jwt");

            if (!jwt) {
                return setAuthState({
                    isLoading: false,
                    isError: null,
                    data: null,
                });
            }

            const res = await axios.get("http://localhost:3000/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

            setAuthState({
                isLoading: false,
                isError: null,
                data: res.data,
            });
        } catch (error: any) {
            setAuthState({
                isLoading: false,
                isError: error.response.data.errorMessage,
                data: null,
            });
        }
    };

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <authContext.Provider value={{ ...authState, setAuthState }}>{children}</authContext.Provider>
    )
}
