import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setuser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext( {} as UserContextType )

export const UserContextProvider=({children}: UserContextProviderProps)=>{
    const [user, setuser] = useState<AuthUser | null>(null); 
      return <UserContext.Provider value={ {user, setuser} }>
                {children}
             </UserContext.Provider>
}