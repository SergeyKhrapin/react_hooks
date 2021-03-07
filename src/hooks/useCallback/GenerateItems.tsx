import {useState, useCallback, FC} from 'react'
import ItemsList from './ItemsList'
import { HookName } from '../../types/types'

const GenerateItems: FC<HookName> = () => {
    const [ counter, setCounter ] = useState<number>(0)
    const [ isColored, setColor ] = useState<boolean>(false)

    const styles = {
        color: isColored ? 'blue' : 'black'
    }

    // Optimization - do API call only if value is changed
    const generateItemsFromAPI = useCallback(() => {
        return new Array(counter).fill('').map((_, i) => `Item ${++i}`)
    }, [counter])
    
    return (
        <>
            <p style={styles}>Items counter - {counter}</p>
            <div className='d-flex'>
                <button className="btn btn-success me-2" onClick={() => setCounter(prevValue => ++prevValue)}>Increase +</button>
                <button className="btn btn-warning" onClick={() => setColor(prevValue => !prevValue)}>Change color</button>
            </div>
            <ItemsList getItems={generateItemsFromAPI} />
        </>
    )
}

export default GenerateItems

