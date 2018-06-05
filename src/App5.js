// 事件
import React, {Component} from 'react'

const style = {}
style.fill = {
  color: 'pink',
  fontSize: 30,
  border: '2px solid red'
}
class ReactEvent extends Component {
  constructor (props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    }
  }
  handleChange (arg, e) {
    console.log(arg);
    let v = e.target
    this.setState({
      value: v.value+arg
    })
  }
  render () {
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this, 'hello')} />
        <p style={style.fill}>{this.state.value}</p>
      </div>
    )
  }
}
export default ReactEvent
