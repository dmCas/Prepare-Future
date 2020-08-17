import React, { Component } from 'react'

export default class UserAdd extends Component {
    constructor() {
        super()
        this.state = {
            arr: [1, 1, 3]
        }
    }



    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.arr.map((item, index) => <li key={item}>{item}</li>)
                    }
                </ul>
                <button onClick={() => {
                    this.setState({
                        arr: this.state.arr.reverse()
                    })
                }}>
                    改变
                </button>
            </div>
        )
    }
}
