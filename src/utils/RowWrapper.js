function RowWrapper(props) {
    const className = `row mb-4 ${props.className}`

    return (
        <div className={className}>
            {props.children}
        </div>  
    )
}

export default RowWrapper
