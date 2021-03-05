import {useContext} from 'react'
import {AlertContext} from './AlertContext'

export default function AlertMessage() {
    const {showAlert} = useContext(AlertContext)

    return showAlert && <div className="alert alert-danger">Alert message</div>
}
