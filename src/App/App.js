import React, {Component} from "react"
// 组件:
//  常量组件  const
const Hello1 = () => <h1>有志者，事竟成！</h1>
//  变量组件  let
let Hello2 = () => <h1>有志者，事竟成！</h1>
//  es5组件   function
function Hello3 () {
  return <h1>苦心人，天不负！</h1>
}
// 内容在渲染之前被转成了字符串，可以有效防止XSS攻击
const str = `<script>alert('XSS攻击')</script>`
//  React.Component类组件
class Hello4 extends Component {
  render () {
    return <h1>{str}</h1>
  }
}
let Hello = () => {
  return (
    <div>
      <Hello1 />
      <Hello3 />
      <Hello2 />
      <Hello4 />
    </div>
  )
}
export default Hello
