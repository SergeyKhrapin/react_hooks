import React, {useState} from 'react'
import RowWrapper from '../../utils/RowWrapper'
import HookTitle from '../../utils/HookTitle'
import AlertMessage from './AlertMessage'
import MainSection from './MainSection'

export const ShowAlertContext = React.createContext()

export default function ShowAlert() {
    const [showAlert, setAlert] = useState(false)

    return (
        <RowWrapper className="hook-useContext">
            <HookTitle tag="h1" options={{className: 'text-primary'}} title="useContext()" />
            <ShowAlertContext.Provider value={showAlert}>
                <AlertMessage />
                <MainSection showAlert={() => setAlert(prevValue => !prevValue)} />
            </ShowAlertContext.Provider>
        </RowWrapper>
    )
}
