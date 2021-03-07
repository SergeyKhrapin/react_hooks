import React, { useState, ChangeEvent } from 'react'
import { HookName } from '../../types/types'

// Custom hook 1
function useLogger(value: string) {
    React.useEffect(() => {
        console.log(value)
    }, [value])
}

// Custom hook 2
function useInput(initialValue: string) {
    const [ value, setValue ] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    const clear = () => setValue('')

    return {
        input: { value, onChange },
        value,
        clear
    }
}

function Input(props: HookName) {
    const { input: firstNameInput, value: firstNameValue, clear: firstNameClear } = useInput('')
    const { input: lastNameInput, value: lastNameValue, clear: lastNameClear } = useInput('')

    useLogger(firstNameValue)
    useLogger(lastNameValue)

    return (
        <>
            <div className="input-group">
                <span className="input-group-text">First name</span>
                <input type="text" className="form-control" {...firstNameInput} />
                <button className="btn btn-warning" onClick={firstNameClear}>Clear</button>
            </div>
            <div className="input-group">
                <span className="input-group-text">Last name</span>
                <input type="text" className="form-control" {...lastNameInput} />
                <button className="btn btn-warning" onClick={lastNameClear}>Clear</button>
            </div>
            <div className="alert alert-primary mt-3" role="alert">
                {firstNameValue} {lastNameValue}
            </div>
        </>
    )
}

export default Input
