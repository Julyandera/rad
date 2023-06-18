import { authContext } from "@/app/context/AuthContext";
import axios from "axios";
import { getCookie, removeCookies } from "cookies-next";
import { useContext } from "react";

const useAuth = () => {
    const { isLoading, isError, data, setAuthState } = useContext(authContext);

    const signIn = async (
        {
            email,
            password,
        }: {
            email: string;
            password: string;
        },
        closeModal: () => {}
    ) => {
        setAuthState({
            isLoading: true,
            isError: null,
            data: null,
        });

        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/signin",
                { email, password }
            );
            setAuthState({
                isLoading: false,
                isError: null,
                data: res.data,
            });
            closeModal();
        } catch (error: any) {
            setAuthState({
                isLoading: false,
                isError: error.response.data.errorMessage,
                data: null,
            });
        }
    };

    const signUp = async ({
        firstName,
        lastName,
        email,
        password,
    }: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) => {
        setAuthState({
            isLoading: true,
            isError: null,
            data: null,
        });

        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/signup",
                { firstName, lastName, email, password }
            );
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

    const signOut = () => {
        removeCookies("jwt");

        setAuthState({
            isLoading: false,
            isError: null,
            data: null,
        });
    };

    return { signIn, signUp, signOut };
};

export default useAuth;
