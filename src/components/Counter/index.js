import {Component} from 'react'
import './index.css'
class CounterApp extends Component {
  state = {count: 0}
  Increase = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  Decrease = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.Increase}>
            Increase
          </button>
          <button className="button" onClick={this.Decrease}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default CounterApp
