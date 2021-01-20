import MainContainer from './MainContainer'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'
import GenerateItems from './hooks/useCallback/GenerateItems'
import ShowAlert from './hooks/useContext/ShowAlert'

function ReactHooks() {
    return (
        <MainContainer>
            <ShowPreviousValue hookName='useRef' />
            <FocusElement hookName='useRef' />
            <ComputeValue hookName='useMemo' />
            <GenerateItems hookName='useCallback' />
            <ShowAlert hookName='useContext' />
        </MainContainer>
    )
}

export default ReactHooks
