function RowWrapper(props) {
    const className = `row ${props.className}`

    return (
        <div className={className}>
            {props.children}
        </div>  
    )
}

export default RowWrapper
