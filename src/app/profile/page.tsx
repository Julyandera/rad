'use client'

import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import AuthModal from "../components/AuthModal";
import useAuth from "../../../hooks/useAuth";


export default function Profile() {
    const { data } = useContext(authContext);
    const { signOut } = useAuth()

    return (
        <div className="h-full flex flex-col justify-center items-center gap-10 mt-10 relative">
            {!data ?
                <div>
                    <AuthModal />
                    <div>
                        <p>401 | User Not Found</p>
                    </div>
                </div>
                :
                <>
                    <div>
                        <div className="bg-primary-black w-32 h-32 rounded-full flex items-center justify-center">
                            <p className="text-white text-4xl">{`${data?.firstName[0]}${data?.lastName[0]}`}</p>
                        </div>
                    </div>
                    <div>
                        <p>{`${data?.firstName} ${data?.lastName}`}</p>
                    </div>
                    <div>
                        <button onClick={signOut} type="button" className='w-32 h-14 bg-primary-black flex items-center justify-center rounded-md'>
                            <p className='text-white text-[1.3rem]'>
                                Sign Out
                            </p>
                        </button>
                    </div>
                </>
            }
        </div>
    )
}
