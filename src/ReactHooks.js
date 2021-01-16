import MainContainer from './MainContainer'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'

function ReactHooks() {
    return (
        <MainContainer>
            <ShowPreviousValue />
            <FocusElement />
            <ComputeValue />
        </MainContainer>
    )
}

export default ReactHooks
