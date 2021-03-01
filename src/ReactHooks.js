import MainContainer from './MainContainer'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'
import GenerateItems from './hooks/useCallback/GenerateItems'
import ShowAlert from './hooks/useContext/ShowAlert'
import Counter from './hooks/useReducer/Counter'
import Input from './hooks/customHooks/Input'

function ReactHooks() {
    return (
        <MainContainer>
            <ShowPreviousValue hookName='useRef' />
            <FocusElement hookName='useRef' />
            <ComputeValue hookName='useMemo' />
            <GenerateItems hookName='useCallback' />
            <ShowAlert hookName='useContext' />
            <Counter hookName='useReducer' />
            <Counter hookName='useReducer' />
            <Input hookName='Custom Hook' />
        </MainContainer>
    )
}

export default ReactHooks
