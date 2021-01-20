import {useState, useMemo} from 'react'

function computeValue(num) {
    // console.log('computeValue')
    let i = 0
    while (i < 1000000000) {
        i++
    }
    return num * 2
}

function ComputeValue() {
    const [value, setValue] = useState(1)
    const [isColored, setColor] = useState(false)

    const styles = {
        color: isColored ? 'crimson' : 'black'
    }

    // console.log('render')
    
    // Pass the array [value] as a second parameter to useMemo - a complex computeValue function will be executed only if value is changed
    const computedValue = useMemo(() => computeValue(value), [value])
    
    return (
        <>
            <p style={styles}>Computed value - {computedValue}</p>
            <div className='d-flex'>
                <button className="btn btn-success me-2" onClick={() => setValue(prevValue => ++prevValue)}>Increase +</button>
                <button className="btn btn-danger me-2" onClick={() => setValue(prevValue => --prevValue)}>Decrease -</button>
                <button className="btn btn-warning" onClick={() => setColor(prevValue => !prevValue)}>Change color</button>
            </div>
        </>
    )
}

export default ComputeValue
