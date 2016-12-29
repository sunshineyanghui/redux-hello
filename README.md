redux-hello

### test.js,num.js为了测试rerender

num.js
```js
import React from 'react';

class Num extends React.Component{
  render(){
    return(
      <div>
        {this.props.num}
      </div>
    )
  }
 }

export default Num;
```

text.js

```js
import React from 'react';
import Num from './num'
class Test extends React.Component{
  constructor(){
    super()
    this.state={
      data:1
    }
  }
  handleClick(e){
    e.preventDefault()
    this.setState({
      data:this.state.data+1
    })
  }
  render(){
    return(
      <div>
        <Num num={this.state.data}/>
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    )
  }
 }

export default Test;

```

### connect 动态读取　store数据

首先明确一点，就是redux 可以配合多种框架使用，并不是react的一部分，
