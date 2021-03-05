import AlertMessage from './AlertMessage'
import MainSection from './MainSection'
import {AlertContextProvider} from './AlertContext'

export default function ShowAlert() {
    return (
        <AlertContextProvider>
            <AlertMessage />
            <MainSection />
        </AlertContextProvider>
    )
}
