import {useContext} from 'react'
import {AlertContext} from './AlertContext'

export default function MainSection() {
    const {showAlert, setAlert} = useContext(AlertContext)

    return (
        <button onClick={() => setAlert(prevValue => !prevValue)} className="col-3 btn-success">
            {showAlert ? 'Hide alert' : 'Show alert'}
        </button>
    )
}
