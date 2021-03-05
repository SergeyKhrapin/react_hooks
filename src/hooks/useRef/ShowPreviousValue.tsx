import {useState, useEffect, useRef} from 'react'

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
        <>
            <h4>To store a variable</h4>
            <p>A previous value - {previousValue.current}</p>
            <input onChange={handleChange} value={value} />
        </>
    )
}

export default ShowPreviousValue
