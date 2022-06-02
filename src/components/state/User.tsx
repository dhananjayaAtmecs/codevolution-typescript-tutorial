import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = ()=>{ 
    // const [user, setuser] = useState< AuthUser | null>(null);
    // type asswersion 
    const [user, setuser] = useState< AuthUser >( {} as AuthUser );

    const handleLogin =()=>{
        setuser({
            name: 'dhanu',
            email: 'dhanu@gmail.com'
        })
    }

    // const handleLogout =()=>{
    //     setuser(null)
    // }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>user name is {user?.name}</div>
            <div>user name is {user?.email}</div>
        </div>
    )
}