import React, { useState, FC } from 'react'
import { HookName } from '../../types/types'

// Key points:
// 1. useState can take a callback to set an initial value.
// 2. useState can take an object as initial value.
// In this case when state is updated - all fields should be passed in to updater (setCount).
// Otherwise, field will be removed from the state object.
// 3. Good practice = pass in a callback rather than a new state value to updater (setCount).
// 4. Multiple states are allowed, i.e. useState can be called multiple times in one component

const Count: FC<HookName> = () => {
    // const [ count, setCount ] = useState<number>(initState())    // Bad practice
    const [ count, setCount ] = useState<number>(() => initState()) // Good practice

    function initState() {
        console.log('Some expensive calculation')
        return 0
    }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <span>Count: { count }</span>
                </div>
                <div className="col-3">
                    <button className="btn btn-success me-2" onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
                </div>
            </div>
        </>
    )
}

export default Count
