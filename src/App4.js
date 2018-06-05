// 生命周期
import React, {Component} from 'react'
class ElementLifecycle extends Component {
  constructor (props) {
    super(props)
    this.date = props.date
    this.state = {
      date: this.date
    }
  }
  componentDidMount () {
    console.log('componentDidMount在第一次渲染后调用')
    if (this.date !== undefined) {
      this.setState({
        date: this.date
      })
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate在组件接收到新的props或者state时被调用', nextProps, nextState)
    return false
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate 在组件完成更新后立即调用', prevProps, prevState)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount 在组件从 DOM 中移除的时候立刻被调用')
  }
  render ()　{
    return (
      <p>时间：{this.state.date.toLocaleTimeString()}</p>
    )
  }
}
export default ElementLifecycle
