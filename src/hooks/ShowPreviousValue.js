import {useState, useEffect, useRef} from 'react'
import RowWrapper from '../utils/RowWrapper'
import HookTitle from '../utils/HookTitle'

function ShowPreviousValue() {
    let [value, setValue] = useState('')
    let previousValue = useRef('') // return an objet {current: ''}
    // previousValue.current doesn't become '' after each rerenderings, because useRef gives us the same ref object on every render

    function handleChange(e) {
        setValue(e.target.value)
    }

    useEffect(() => {
        previousValue.current = value
    })
    
    return (
        <RowWrapper className="hook-useRef">
            <HookTitle tag="h1" options={{className: 'mb-4 text-primary'}} title="useRef()"/>
            <HookTitle title="To store a variable" tag="h4"/>
            <p>A previous value - {previousValue.current}</p>
            <input onChange={handleChange} value={value} />
        </RowWrapper>
    )
}

export default ShowPreviousValue
