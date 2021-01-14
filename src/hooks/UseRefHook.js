import {useState, useEffect, useRef} from 'react'
import RowWrapper from '../utils/RowWrapper'
import HookTitle from '../utils/HookTitle'

function UseRefHook() {
    let [value, setValue] = useState('')
    let previousValue = useRef('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    useEffect(() => {
        previousValue.current = value
    })
    
    return (
        <RowWrapper className="hook-useRef">
            <HookTitle title="useRef()" tag="h1"/>
            <HookTitle title="To store a variable" tag="h4"/>
            <p>A previous value - {previousValue.current}</p>
            <input onChange={handleChange} value={value} />
        </RowWrapper>
    )
}

export default UseRefHook
