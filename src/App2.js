// children
import React, {Component} from 'react'
class ReactChildren extends Component {
  render () {
    return (
      <div>
        {
          this.props.children.map((item, key) => {
            return (
              <h1 key={key}>{item}</h1>
            )
          })
        }
      </div>
    )
  }
}
export default ReactChildren
