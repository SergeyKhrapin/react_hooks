import React, { Component, PureComponent } from 'react'

type Props = {}
type State = { value: number }

export class Parent extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { value: 0 }
    }

    render() {
        return (
            <>
                <div className="row mb-4 mt-5">
                    <h2 className="text-primary">Class component - PureComponent</h2>
                </div>
                <div className="row mt-4">
                    <div className="col-2">
                        Current state: {this.state.value}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success" onClick={() => this.setState({value: this.state.value + 1})}>Change state</button>
                    </div>
                </div>
                <ChildWithPrimitiveProps primitiveProp="String" />
                <ChildWithNonPrimitiveProps nonPrimitiveProp1={{}} nonPrimitiveProp2={() => {}} />
            </>
        )
    }
}

type PrimitiveProps = {
    [key: string]: string | number
}

class ChildWithPrimitiveProps extends PureComponent<PrimitiveProps> {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-12 border border-2 p-3">
                    <h6>ChildWithPrimitiveProps - { Date.now() }</h6>
                </div>
            </div>
        )
    }
}

type NonPrimitiveProps = {
    [key: string]: {} | [] | (() => void)
}

class ChildWithNonPrimitiveProps extends Component<NonPrimitiveProps> {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-12 border border-2 p-3">
                    <h6>ChildWithNonPrimitiveProps - { Date.now() }</h6>
                </div>
            </div>
        )
    }
}
