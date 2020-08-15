import React, { Component } from 'react'
import {Consumer} from './context'
import { pathToRegexp } from 'path-to-regexp'

export default class Switch extends Component {
    render() {
        return (
            <Consumer>
                {
                    state => {
                        let pathname = state.location.pathname
                        let children = this.props.children
                        for (let i = 0; i < children.length; i++) {
                            let child = children[i]
                            let path = child.props.path || ''
                            let reg = pathToRegexp(path, [], {end: false})
                            let result = pathname.match(reg)
                            if(result) {
                                return child
                            }
                        }
                        return null
                    }
                }
            </Consumer>
        )
    }
}
