import MainContainer from './MainContainer'
import Count from './hooks/useState/Count'
import Form from './hooks/useEffect/Form'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'
import GenerateItems from './hooks/useCallback/GenerateItems'
import ShowAlert from './hooks/useContext/ShowAlert'
import Counter from './hooks/useReducer/Counter'
import Input from './hooks/customHooks/Input'
import Toggle from './hooks/customHooks/Toggle'
import Login from './hooks/customHooks/login/Login'
import * as Memo from './preventRerendering/functionalComponent'
import * as Pure from './preventRerendering/classComponent'
import RenderProps from './renderProps/Counter'
import {useState, useMemo} from 'react'
import Fetch from './hooks/useEffect/Fetch'

function ReactHooks() {
  const [counter, setCounter] = useState(0)

    return (
        <>
            <MainContainer>
              <div>Parent counter - {counter}</div>
              <button onClick={() => setCounter(val => ++val)}>+</button>
              <button onClick={() => setCounter(val => --val)}>-</button>
                <Count hookName='useState' />
                <Form hookName='useEffect' />
                <Fetch hookName='useEffect' />
                <ShowPreviousValue hookName='useRef 1' />
                <FocusElement hookName='useRef 2' />
                <ComputeValue hookName='useMemo' />
                <GenerateItems hookName='useCallback' />
                <ShowAlert hookName='useContext' />
                <Counter hookName='useReducer 1' />
                <Counter hookName='useReducer 2' />
                <Input hookName='Custom Hook 1' />
                <Toggle hookName='Custom Hook 2' />
                <Login hookName='Custom Hook 3' />
            </MainContainer>
            <div className="extra-container container">
                <div className="row m-5">
                    <div className="col-12">
                        <h1 className="text-center">Prevent component rerendering</h1>
                    </div>
                </div>
                <Memo.Parent />
                <Pure.Parent />
            </div>
            <div className="extra-container container">
                <div className="row m-5">
                    <div className="col-12">
                        <h1 className="text-center">Render Props</h1>
                    </div>
                </div>
                <RenderProps />
            </div>
        </>
    )
}

export default ReactHooks
