import React, {Component} from 'react'
class Test extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count: 0
    }
  }
  handleClick (e) {
    this.state.count++
    this.setState( (state, props) => {
      let count = state.count
      return {count}
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>点我+1</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
export default Test
