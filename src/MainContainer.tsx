import React, { ReactNode, ReactNodeArray } from 'react'

type Props = {
    children: ReactNodeArray
}

const MainContainer = ({ children }: Props) => {
    return (
        <div className="hooks-container container">
            <div className="row">
                <header className="hooks-header text-center">
                    <h1>React Hooks</h1>
                </header>
            </div>
            {
                // TODO: fix any type
                children.map((el: any) => {    
                    const hookName = el?.props?.hookName
                    const className = `row mb-4 hook-${hookName}`
                    return (
                        <div className={className} key={hookName}>
                            <h2 className="text-primary">{hookName}</h2>
                            { el }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainContainer
