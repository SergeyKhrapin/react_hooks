import MainContainer from './MainContainer'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'
import GenerateItems from './hooks/useCallback/GenerateItems'
import ShowAlert from './hooks/useContext/ShowAlert'
import Counter from './hooks/useReducer/Counter'
import Input from './hooks/customHooks/Input'
import Toggle from './hooks/customHooks/Toggle'
import * as Memo from './preventRerendering/functionalComponent'
import * as Pure from './preventRerendering/classComponent'

function ReactHooks() {
    return (
        <>
            <MainContainer>
                <ShowPreviousValue hookName='useRef 1' />
                <FocusElement hookName='useRef 2' />
                <ComputeValue hookName='useMemo' />
                <GenerateItems hookName='useCallback' />
                <ShowAlert hookName='useContext' />
                <Counter hookName='useReducer 1' />
                <Counter hookName='useReducer 2' />
                <Input hookName='Custom Hook' />
                <Toggle hookName='Custom Hooks' />
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
        </>
    )
}

export default ReactHooks