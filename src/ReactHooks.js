import MainContainer from './MainContainer'
import ShowPreviousValue from './hooks/ShowPreviousValue'
import FocusElement from './hooks/FocusElement'
import ComputeValue from './hooks/ComputeValue'

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
