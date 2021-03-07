import AlertMessage from './AlertMessage'
import MainSection from './MainSection'
import {AlertContextProvider} from './AlertContext'
import { HookName } from '../../types/types'

export default function ShowAlert(props: HookName) {
    return (
        <AlertContextProvider>
            <AlertMessage />
            <MainSection />
        </AlertContextProvider>
    )
}
