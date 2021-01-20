function MainContainer({children}) {
    return (
        <div className="hooks-container container">
            <div className="row">
                <header className="hooks-header text-center">
                    <h1>React Hooks</h1>
                </header>
            </div>
            {
                children.map(el => {
                    const hookName = el.props.hookName
                    const className = `row mb-4 hook-${hookName}`
                    return (
                        <div className={className}>
                            <h1 className="text-primary">{hookName}</h1>
                            {el}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainContainer
