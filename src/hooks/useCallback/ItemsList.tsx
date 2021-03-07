import {useState, useEffect, ReactElement} from 'react'

// interface Props {
//     getItems: () => string[]
// }

// or

type Props = {
    getItems: () => string[]
}

// function declaration
function ItemsList({ getItems }: Props): ReactElement {
    const [ items, setItems ] = useState<string[]>([])

    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
}

// or
// function expression

// const ItemsList: React.FC<Props> = ({ getItems }) => {
//     const [ items, setItems ] = useState<string[]>([])

//     useEffect(() => {
//         setItems(getItems())
//     }, [getItems])

//     return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
// }

export default ItemsList
