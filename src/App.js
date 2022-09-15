import React, { Component } from 'react';
import './style.css'

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }

        this.temp = null
        this.handleTimerStart = this.handleTimerStart.bind(this)
        this.handleTimerStop = this.handleTimerStop.bind(this)
    }

    handleTimerStart() {
        if(this.temp !== null) {
            clearInterval(this.temp)
            this.temp = null
        } else {
            this.temp = setInterval(() => {
                let state = this.state
                state.timer += 0.1
    
                this.setState({state})
            }, (100));
        }
    }

    handleTimerStop() {
        if(this.temp !== null) {
            clearInterval(this.temp)
            this.setState({ timer: 0 })
            this.temp = null
        } else {
            this.setState({ timer: 0 })
        }
    }

    render(){
        return(
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img' />
                <a className='timer'>
                    {this.state.timer.toFixed(1)}
                </a>
                <div className='areaBtn'>
                    <a onClick={this.handleTimerStart} className='button'>
                        { this.temp === null ? 'Começar' : 'Pausar'}
                    </a>
                    <a onClick={this.handleTimerStop} className='button'>
                        ZERAR
                    </a>
                </div>
            </div>
        );
    }
}
export default App