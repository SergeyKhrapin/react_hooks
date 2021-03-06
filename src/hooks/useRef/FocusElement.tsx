import { useState, useRef, FC } from 'react'
import { HookName } from '../../types/types'

const FocusElement: FC<HookName> = () => {
    let [ value, setValue ] = useState<string>('')
    let input = useRef<HTMLInputElement>(null!)

    function handleButtonClick() {
        input.current.focus()
    }
    
    return (
        <>
            <h4>To get an access to DOM element</h4>
            <div className='d-flex'>
                {/* <input ref={input} onChange={() => setValue(input.current.value)} value={value} /> */}
                <input ref={input} onChange={e => setValue(e.target.value)} value={value} />
                <button className="btn btn-primary ms-2" onClick={handleButtonClick}>Focus</button>
            </div>
        </>
    )
}

export default FocusElement

