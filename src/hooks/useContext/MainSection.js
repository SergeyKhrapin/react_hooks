import {useContext} from 'react'
import {ShowAlertContext} from './ShowAlert'

export default function MainSection({showAlert}) {
    const context = useContext(ShowAlertContext)

    console.log(context)

    return (
        <button onClick={showAlert} className="col-3 btn-success">
            {context ? 'Hide alert' : 'Show alert'}
        </button>
    )
}
