import React, { FC } from 'react'
import AlertMessage from './AlertMessage'
import MainSection from './MainSection'
import {AlertContextProvider} from './AlertContext'
import { HookName } from '../../types/types'

const ShowAlert: FC<HookName> = () => {
    return (
        <AlertContextProvider>
            <AlertMessage />
            <MainSection />
        </AlertContextProvider>
    )
}

export default ShowAlert
