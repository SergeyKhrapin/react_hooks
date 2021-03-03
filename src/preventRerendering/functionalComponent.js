import React, { useState, useMemo, useCallback, memo } from 'react'

export const Parent = () => {
const [value, setValue] = useState(0)

    // Primitive value
    const string = 'String'

    // In case when props are non primitive values 
    // because such types of props are recognized as changed and it leads to rerender
    // Thus, memo HOC doesn't work, so additionally we should use memoization hook (useMemo or useCallback)
    let obj = {}
    obj = useMemo(() => obj, [])

    let func = () => {}
    func = useCallback(() => func, [])

    return (
        <>
            <div className="row mb-4">
                <h2 className="text-primary">Functional component - memo HOC</h2>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    Current state: {value}
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={() => setValue(value + 1)}>Change state</button>
                </div>
            </div>
            <ChildWithPrimitiveProps primitiveProp={string} />
            <ChildWithNonPrimitiveProps nonPrimitiveProp1={obj} nonPrimitiveProp2={func} />
        </>
    )
}

const ChildWithPrimitiveProps = memo(() => {
    return (
        <div className="row mt-4">
            <div className="col-12 border border-2 p-3">
                <h6>ChildWithPrimitiveProps - { Date.now() }</h6>
            </div>
        </div>
    )
})

const ChildWithNonPrimitiveProps = memo(() => {
    return (
        <div className="row mt-4">
            <div className="col-12 border border-2 p-3">
                <h6>ChildWithNonPrimitiveProps - { Date.now() }</h6>
            </div>
        </div>
    )
})
