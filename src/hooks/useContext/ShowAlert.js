import React, {useState} from 'react'
import RowWrapper from '../../utils/RowWrapper'
import HookTitle from '../../utils/HookTitle'
import AlertMessage from './AlertMessage'
import MainSection from './MainSection'
import {AlertContextProvider} from './AlertContext'

export default function ShowAlert() {
    return (
        <RowWrapper className="hook-useContext">
            <HookTitle tag="h1" options={{className: 'text-primary'}} title="useContext()" />
            <AlertContextProvider>
                <AlertMessage />
                <MainSection />
            </AlertContextProvider>
        </RowWrapper>
    )
}
