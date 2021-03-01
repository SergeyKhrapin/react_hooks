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

    function onChange(e) {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}

function Input() {
    const firstNameInput = useInput('')
    const lastNameInput = useInput('')

    const firstName = firstNameInput.value
    const lastName = lastNameInput.value

    useLogger(firstName)
    useLogger(lastName)

    return (
        <>
            <div class="input-group">
                <span class="input-group-text">First and last name</span>
                <input type="text" className="form-control" {...firstNameInput} />
                <input type="text" className="form-control" {...lastNameInput} />
            </div>
            <div className="alert alert-primary mt-3" role="alert">
                {firstName} {lastName}
            </div>
        </>
    )
}

export default Input
