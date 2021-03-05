import {useState, useEffect} from 'react'

function ItemsList({getItems}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export default ItemsList
