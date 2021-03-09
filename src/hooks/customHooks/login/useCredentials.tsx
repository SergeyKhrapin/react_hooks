import { useState, ChangeEvent } from 'react'

type InitialState = {
    login: string,
    password: string
}

function useCredentials(initialState: InitialState) {
    const [ values, setValues ] = useState<InitialState>(initialState)

    return {
        values,
        changeHandler: (e: ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    }
}

export default useCredentials
