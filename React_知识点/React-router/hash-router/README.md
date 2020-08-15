## 你应该知道的单页应用
### 单页应用是什么?
单页Web应用（single page web application，SPA），就是只有一张Web页面的应用。是只**加载单个HTML页面，并在用户与应用程序交互时动态更新该页面**的Web应用程序。而`React`、`Vue`就是构建单页应用的前端主流框架。

### 单页应用和多页应用的对比
对比|单页面应用|多页面应用
--|:--|:--
组成|一个外壳页面和多个页面组件（片段）构成| 多个完整的页面组成 
资源（css,js)|可共用，只需要在外壳部分加载| 需要时向服务器请求，资源独立
首次加载|首屏加载慢|每次加载区别不大
用户体验|用户体验好，内容改变不需要重新加载整个页面，后续服务器压力小|页面加载慢，每次加载需要对服务器进行请求
转场动画|可以实现|无法实现
搜索引擎优化（SEO）|效果较差，可通过SSR服务端渲染，成本较高|效果好

### SPA单页应用的原理（路由的作用）：
通过监听路由的变化，去匹配路由所对应的组件，并将组件映射到路由上。当路由改变时框架能有效地更新并正确地渲染组件。

## 你需要了解的HashRouter实现过程

这里我介绍HashRouter的实现原理、过程
### 路由的三大构成
React Router中有三类组件:
1. Router（包括HashRouter与BrowserRouter)
>对应路由的两种模式hash和history
2. route matching组件(Route)
>控制路径对应的显示组件
3. navigation组件(Link)
> 路由切换,跳转

### 手动实现过程
以一个demo为例
```
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/home" component={Home}></Route>
        <Route path="/user" component={User}></Route>
      </HashRouter>
    )
  }
}
ReactDOM.render(<App />,
  document.getElementById('root')
);
```
这里Route组件获得了对应的路径和所要展示的组件，并嵌套在Router组件中。
#### HashRouter组件   
首先我们要知道BOM的一些特性
>`BOM`是一套操作浏览器的API，而window是BOM中的一个顶级的对象，我们可以通过this.props打印挂载在window下的一些信息，以掘金为例

![样例](https://user-gold-cdn.xitu.io/2020/5/29/172609fdf2cfa4db?w=990&h=425&f=png&s=49648)

而HashRouter的实现就依赖于这些Api,我们可以通过`window.location.href`与`window.location.hash`拿到我们所在的url值与其hash值。

当然通过这个就可以了吗？等等Route作为HashRouter的嵌套组件是怎么拿到url路径去匹配path的呢？

**这里React-Router采用了React16.3版本提出的api React.createContext**

##### Context通过组件树提供一个传递数据的方法
>可以解决父组件向子组件、孙子孙子...传值,为多组件嵌套数据传递提供解决方案。
```
//我们通过一个context.js方法引入这个api
import React from 'react';
let { Provider, Consumer } = React.createContext()
export { Provider, Consumer }
```
而HashRouter便充当了这个生产者的角色，通过`window.addEventListener('hashChange',callback)`监听hash值的变化，并传递给其嵌套的组件。

具体代码如下：
```
import React, { Component } from 'react';
import { Provider } from './context'
// 该组件下Api提供给子组件使用
class HashRouter extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  // url路径变化 改变location
  componentDidMount() {
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      }, () => console.log(this.state.location))
    })
  }
  render() {
    let value = {
      location: this.state.location
    }
    return (
      <Provider value={value}>
        {
          this.props.children
        }
      </Provider>
    );
  }
}

export default HashRouter;
```

#### Route组件
Router组件则充当的消费者的角色，通过一个回调接收到HashRouter传递过来的url路径值，并进行后面的匹配渲染组件
```
import React, { Component } from 'react';
import { Consumer } from './context'
const { pathToRegexp } = require("path-to-regexp");
class Route extends Component {
  render() {
    return (
      <Consumer>
        {
          state => {
            console.log(state)
            let {path, component: Component} = this.props
            let pathname = state.location.pathname
            let reg = pathToRegexp(path, [], {end: false})
            // 判断当前path是否包含pathname
            if(pathname.match(reg)) {
              return <Component></Component>
            }
            return null
          }
        }
      </Consumer>
    );
  }
}
export default Route;
```
由于官方实现的正则表达式较为复杂，这里我借助了`path-to-regexp`这个插件去进行正则匹配的处理。

实现效果:

<img src="https://user-gold-cdn.xitu.io/2020/5/29/17260b2cb3b998b4?w=855&h=838&f=gif&s=124954/w/20" width="500px" height="400px" align="middle"></img>


## 总结
本次只是简单的模拟了下HashRouter的实现过程，对React-Router的实现原理也有了一定的认识。最后，学习的过程，重在总结，乐在分享，欢迎大家留言和我交流分享😀。