import {useState, useCallback} from 'react'
import RowWrapper from '../../utils/RowWrapper'
import HookTitle from '../../utils/HookTitle'
import ItemsList from './ItemsList'

function GenerateItems() {
    const [counter, setCounter] = useState(0)
    const [isColored, setColor] = useState(false)

    const styles = {
        color: isColored ? 'blue' : 'black'
    }

    // Optimization - do API call only if value is changed
    const generateItemsFromAPI = useCallback(() => {
        return new Array(counter).fill('').map((_, i) => `Item ${++i}`)
    }, [counter])
    
    return (
        <RowWrapper className="hook-useCallback">
            <HookTitle tag="h1" options={{className: 'text-primary'}} title="useCallback()" />
            <p style={styles}>Items counter - {counter}</p>
            <div className='d-flex'>
                <button className="btn-success" onClick={() => setCounter(prevValue => ++prevValue)}>Increase +</button>
                <button className="btn-warning" onClick={() => setColor(prevValue => !prevValue)}>Change color</button>
            </div>
            <ItemsList getItems={generateItemsFromAPI} />
        </RowWrapper>
    )
}

export default GenerateItems

