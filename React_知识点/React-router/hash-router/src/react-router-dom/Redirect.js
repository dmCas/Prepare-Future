import React, { Component } from 'react'
import {Consumer} from './context'
export default class Redirect extends Component {
    render() {
        return (
            <Consumer>
                {
                    state => {
                        const {to, from} = this.props
                        if(state.location.pathname === from) {
                            state.history.push(to)
                        }
                        return null
                    }
                }
            </Consumer>
        )
    }
}
