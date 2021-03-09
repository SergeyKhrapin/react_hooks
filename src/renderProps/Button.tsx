import React, { useState, FC, Dispatch, SetStateAction } from 'react'

interface Props {
    children: (
        count: number,
        setCount: Dispatch<SetStateAction<number>>
    ) => JSX.Element | null
}

const Button: FC<Props> = ({ children }) => {
    const [ counter, setCounter ] = useState<number>(0)

    return children(counter, setCounter)
}

export default Button
