import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    state = {
        timesclicked: 0
    }

    updateClick = () => {
        this.setState(previousState => {
            return {
                timesclicked: previousState.timesclicked + 1
            }
        })
    }
    
    render() {
        return (
            <button
                onClick={this.updateClick}
            >
                {this.state.timesclicked}
            </button>
        )
    }
}

