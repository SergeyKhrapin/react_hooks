import {useState, useRef} from 'react'
import RowWrapper from '../../utils/RowWrapper'
import HookTitle from '../../utils/HookTitle'

function FocusElement() {
    let [value, setValue] = useState('')
    let input = useRef(null)

    function handleButtonClick() {
        input.current.focus()
    }
    
    return (
        <RowWrapper className="hook-useRef">
            <HookTitle title="To get an access to DOM element" tag="h4"/>
            <div className='d-flex'>
                <input ref={input} onChange={e => setValue(e.target .value)} value={value} />
                <button className="btn-primary" onClick={handleButtonClick}>Focus</button>
            </div>
        </RowWrapper>
    )
}

export default FocusElement

