// import React, { Component } from 'react';
// import './App.css'

// class App1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {count:0}
//         this.addCount = this.addCount.bind(this)
//     }
//     componentDidMount(){
//         console.log(`componentDidMount => You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate => You clicked ${this.state.count} times`)
//     }
//     componentWillMount(){
//         console.log(`componentWillMount => You clicked ${this.state.count} times`)
//     }
//     render() { 
//         return (
//             <div id="container">
//                 <h3>'YOU CLICK ' + {this.state.count} +' Times'</h3>
//                 <button onClick={this.addCount}>CLick me</button>
//             </div>
//         )
//     }
//     addCount(){
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
// }
 
// export default App1;

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'

function Index(){
    useEffect(() => {
        console.log('useEffect => 这是 Index 页面')
        return () => {
            console.log('useEffect => 退出 Index 页面')
        }
    },[])
    return (<h2>hello world</h2>)
}

function List(){
    useEffect(() => {
        console.log('useEffect => 这是 List 页面')
        return () => {
            console.log('useEffect => 退出 List 页面')
        }
    },[])
    return (<h2>List page</h2>)
}

function App1(){
    const [count, setCount] = useState(0)
    // useEffect 代表了componentDidMount 和 componentDidUpdate
    // useEffect 异步操作，不影响渲染
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`)
        return () => {
            console.log('==========================')
        }
    },[count])
    return (
        <div id="container">
            <h3>'YOU CLICK ' + {count} +' Times'</h3>
            <button onClick={() => {setCount(count+1)}}>CLick me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List} />
            </Router>
        </div>
    )
}

export default App1