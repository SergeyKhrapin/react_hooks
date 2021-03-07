import { useState, useEffect, useRef, FC, ChangeEvent } from 'react'
import { HookName } from '../../types/types' 

const ShowPreviousValue: FC<HookName> = () => {
    let [ value, setValue ] = useState<string>('')
    let previousValue = useRef<string>('') // return an objet {current: ''}
    // previousValue.current doesn't become '' after each rerenderings, because useRef gives us the same ref object on every render

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
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
