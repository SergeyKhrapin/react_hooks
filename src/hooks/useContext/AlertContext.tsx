import React, {useState} from 'react'

interface Context {
    showAlert?: boolean,
    setAlert: ( a: (b: any) => boolean ) => void
}

const defaultValue: Context = {
    setAlert: () => {}
}

export const AlertContext = React.createContext(defaultValue)

type PROPS = { children: object }

export function AlertContextProvider(props: PROPS) {
    const [showAlert, setAlert] = useState<boolean>(false)

    return (
        <AlertContext.Provider value={{ showAlert, setAlert }}>
            { props.children }
        </AlertContext.Provider>
    )
}
