import MainContainer from './MainContainer'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'
import GenerateItems from './hooks/useCallback/GenerateItems'

function ReactHooks() {
    return (
        <MainContainer>
            <ShowPreviousValue />
            <FocusElement />
            <ComputeValue />
            <GenerateItems />
        </MainContainer>
    )
}

export default ReactHooks
