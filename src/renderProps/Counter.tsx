import React, { FC, Dispatch, SetStateAction } from 'react'
import Button from './Button'

const Counter: FC = () => {
    function renderProps(value: number, setValue: Dispatch<SetStateAction<number>>) {
        return (
            <>
                <div className="col-1">
                    <span>{ value }</span>
                </div>
                <div className="col-3">
                    <button className="btn btn-success" onClick={() => setValue(value + 1)}>Change counter { Date.now() }</button>
                </div>
            </>
        )
    }

    return (
        <div className="row">
            <p>{ Date.now() } - this is a parent's content and it is not rerendered</p>
            <Button children={ renderProps } />
        </div>
    )
}

export default Counter
