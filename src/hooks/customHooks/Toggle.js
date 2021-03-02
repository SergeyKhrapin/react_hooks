import React, { useReducer } from 'react'

function useToggle() {
    const TOGGLE = 'TOGGLE'

    const reducer = (state, action) => {
        if (action.type === TOGGLE) {
            return {...state, toggle: !state.toggle}
        }
        return state
    }

    const initialState = {toggle: false}

    const [stateButton, dispatch] = useReducer(reducer, initialState)

    return {
        toggle: stateButton.toggle,
        setToggle: () => {
            dispatch({ type: TOGGLE })
        }
    }
}

function Toggle() {
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

function Button({ toggle, setToggle }) {
    return (
        <button className={`btn btn-${toggle ? 'success' : 'secondary'}`} onClick={setToggle}>
            Toggle is {toggle ? 'on' : 'off'}
        </button>
    )
}

export default Toggle
