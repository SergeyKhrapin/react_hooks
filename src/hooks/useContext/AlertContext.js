import React, {useState} from 'react'

export const AlertContext = React.createContext()

export function AlertContextProvider({children}) {
    const [showAlert, setAlert] = useState(false)

    return (
        <AlertContext.Provider value={{showAlert, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
