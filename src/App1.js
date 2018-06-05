import React, {Component} from "react"

// 初始化
class ElementState extends Component {
  constructor (props) {
    super(props)
    this.state = {time: new Date()}
  }
  render () {
    return (
      <h1>初始时间 => {this.state.time.toLocaleTimeString()}</h1>
    )
  }
}

// 更新
class ElementUpdate extends Component {
  constructor (props) {
    super(props)
    this.date = props.date
    this.state = {date: 1234}
  }
  componentDidMount () {
    if (this.date === 2345) {
      this.setState({
        date: 3456
      })
    }
  }
  render () {
    return (
      <h1>更新时间 => {this.state.date}</h1>
    )
  }
}
export default ElementUpdate