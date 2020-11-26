// 类的方式写组件
// import React, { Component } from 'react';
// import './App.css'
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             times: 0
//         }
//         this.btnClick = this.btnClick.bind(this)
//     }
//     render() { 
//         return (
//             <div id="container">
//                 <h3>{You are clicked  this.state.times  times}</h3>
//                 <button onClick={this.btnClick}>Click me</button>
//             </div>
//         );
//     }
//     btnClick(){
//         let times = this.state.times
//         times += 1
//         this.setState({
//             times: times
//         })
//     }
// }
 
// export default App;

// Hooks ，函数方式写组件
import React, { useState } from 'react'
import './App.css'

function App(){
    // 设置状态和改变状态
    const [ times, setTimes] =  useState(0)
    return(
        <div id="container">
            <h3>{'You are clicked ' + times  +' times'}</h3>
            <button onClick={() => {setTimes(times+1)}}>Click me</button>
        </div>
    )
}

export default App