import React, { useReducer, FC, MouseEventHandler } from 'react'
import { Action, HookName } from '../../types/types'
// or
// import { Action } from '../../interfaces/interface'

function useToggle() {
    const TOGGLE = 'TOGGLE'
    const initialState = { toggle: false }

    type State = typeof initialState

    const reducer = (state: State, action: Action) => {
        if (action.type === TOGGLE) {
            return {...state, toggle: !state.toggle}
        }
        return state
    }

    const [ stateButton, dispatch ] = useReducer(reducer, initialState)

    return {
        toggle: stateButton.toggle,
        setToggle: () => {
            dispatch({ type: TOGGLE })
        }
    }
}

const Toggle: FC<HookName> = () => {
    return (
        <div className="row">
            <div className="col-3">
                <Button {...useToggle()} />
            </div>
            <div className="col-3">
                <Button {...useToggle()} />
            </div>
        </div>
    )
}

interface Props {
    toggle: boolean,
    setToggle: MouseEventHandler<HTMLButtonElement>
}

function Button({ toggle, setToggle }: Props) {
    return (
        <button className={`btn btn-${toggle ? 'success' : 'secondary'}`} onClick={setToggle}>
            Toggle is {toggle ? 'on' : 'off'}
        </button>
    )
}

export default Toggle
