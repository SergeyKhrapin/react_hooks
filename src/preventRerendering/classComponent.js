import React, { Component, PureComponent } from 'react'

export class Parent extends Component {
    constructor() {
        super()
        this.state = { value: 0 }
    }

    render() {
        return (
            <>
                <div className="row mb-4">
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

class ChildWithPrimitiveProps extends PureComponent {
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

class ChildWithNonPrimitiveProps extends Component {
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