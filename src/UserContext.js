import { createContext, useState } from "react";


let UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({ names: "" });

    return (
        // Here USER is a Object it has a key - that is names
        // example {user : {names : " "},setUser : () => {}}
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;

