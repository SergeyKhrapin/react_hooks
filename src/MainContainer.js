function MainContainer(props) {
    return (
        <div className="hooks-container container">
            <div className="row">
                <header className="hooks-header">
                <h1>React Hooks</h1>
                </header>
            </div>
            {props.children}
        </div>
    )
}

export default MainContainer
