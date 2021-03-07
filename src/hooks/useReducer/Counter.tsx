import { useReducer, FC } from 'react'
import { Action, HookName } from '../../types/types'

const initialState = { number: 0 }

type State = typeof initialState

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increment':
            return { number: state.number + 1 }
        case 'decrement':
            return { number: state.number - 1 }
        default:
            throw new Error()
    }
}

const Counter: FC<HookName> = () => {
    const [ counter, dispatch ] = useReducer(reducer, initialState)

    return (
        <>
            <p className="row">Count: {counter.number}</p>
            <div className="row d-flex">
                <button className="col-3 btn btn-success me-2" onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button className="col-3 btn btn-danger" onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>
        </>
    )
}

export default Counter
