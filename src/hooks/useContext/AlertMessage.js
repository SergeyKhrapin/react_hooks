import {useContext} from 'react'
import {ShowAlertContext} from './ShowAlert'

export default function AlertMessage() {
    const context = useContext(ShowAlertContext)

    return context && <div className="alert alert-danger">Alert message</div>
}
