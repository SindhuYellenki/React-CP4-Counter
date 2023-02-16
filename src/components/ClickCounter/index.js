import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevstate => {
      console.log(prevstate.count)
      return {count: prevstate.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count">{count}</span> times
        </h1>
        <p className="desc">Click the button to increase the count!</p>
        <button className="button" onClick={this.increaseCount} type="button">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
