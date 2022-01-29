import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decelerate = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedometer_image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="para">speed is {speed}mph</h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="button button1"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="button button2"
            type="button"
            onClick={this.decelerate}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
