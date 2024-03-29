/******************************************************************************/
/*                                                                            */
/*                                                        :::      ::::::::   */
/*                                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*                                                  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Jalbers42                                         #+#    #+#             */
/*   https://github.com/Jalbers42                     ###   ###########       */
/*                                                                            */
/******************************************************************************/

import { generateRandomString } from "@/lib/utilities";
import { IUser } from "@/types & constants/types";
import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_USER = {
    username: "",
    password: "",
    rank: 0,
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    setUser: () => {},
    socket: null
}

type IContextType = {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children } : {children : React.ReactNode}) {
    const [user, setUser] = useState<IUser>(INITIAL_USER);

    console.log("Auth Context Render");

    const value = {
        user: user,
        setUser: setUser,
    };

    useEffect(() => {
        setUser(user => ({...user, username: generateRandomString(10)}));
    }, [])

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export const useUserContext = () => useContext(AuthContext);