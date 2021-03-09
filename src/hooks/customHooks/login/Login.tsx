import React, { FC } from 'react'
import Input from './Input'
import { HookName } from '../../../types/types'
import useCredentials from './useCredentials'

const Login: FC<HookName> = () => {
    const { values: { login, password }, changeHandler } = useCredentials({ login: '', password: '' })

    const loginInput = {
        value: login,
        onChange: changeHandler,
        name: 'login',
        placeholder: 'Your login'
    }

    const passwordInput = {
        value: password,
        onChange: changeHandler,
        type: 'password',
        name: 'password',
        placeholder: 'Your password'
    }

    return (
        <div className="row">
            <div className="col-3">
                <Input { ...loginInput } />
            </div>
            <div className="col-3">
                <Input { ...passwordInput } />
            </div>
        </div>
    )
}

export default Login
