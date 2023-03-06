import { createContext, useState } from 'react'

// first, create the context object
const UserContext = createContext()


// second, create the context provider (component)
function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    const value = [user, setUser]

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// finally, export the context and the provider
export { UserContext, UserProvider }