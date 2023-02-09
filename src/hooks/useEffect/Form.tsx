import React, { useEffect, FC } from 'react'
import { HookName } from '../../types/types'
import { useInput } from '../customHooks/Input'
import Hello from './Hello'

const Form: FC<HookName> = () => {
    const { input: firstName } = useInput('')
    const { input: login } = useInput('')
    const { input: password } = useInput('')

    useEffect(() => {
      // It is called SECOND whenever firstName changes or when Form component mounts
      // console.log('firstName changed or Form mounted')

      return () => {
        // It is called FIRST whenever firstName changes or when Form component unmounts
        // console.log('Cleanup effect - firstName changed or Form unmounted')
      }
    }, [firstName.value])

    return (
        <>
            { firstName.value && <Hello name={firstName.value} /> }
            <div className="input-group">
                <span className="input-group-text">First name</span>
                <input type="text" className="form-control" {...firstName} />
            </div>
            <div className="input-group">
                <span className="input-group-text">Login</span>
                <input type="text" className="form-control" {...login} />
            </div>
            <div className="input-group">
                <span className="input-group-text">Password</span>
                <input type="password" className="form-control" {...password} />
            </div>
        </>
    )
}

export default Form
