import React, { useState } from 'react'

// Custom hook 1
function useLogger(value) {
    React.useEffect(() => {
        console.log(value)
    }, [value])
}

// Custom hook 2
function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = e => setValue(e.target.value)

    const clear = () => setValue('')

    return {
        input: { value, onChange },
        value,
        clear
    }
}

function Input() {
    const { input: firstNameInput, value: firstNameValue, clear: firstNameClear } = useInput('')
    const { input: lastNameInput, value: lastNameValue, clear: lastNameClear } = useInput('')

    useLogger(firstNameValue)
    useLogger(lastNameValue)

    return (
        <>
            <div class="input-group">
                <span class="input-group-text">First name</span>
                <input type="text" className="form-control" {...firstNameInput} />
                <button className="btn btn-warning" onClick={firstNameClear}>Clear</button>
            </div>
            <div class="input-group">
                <span class="input-group-text">Last name</span>
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
