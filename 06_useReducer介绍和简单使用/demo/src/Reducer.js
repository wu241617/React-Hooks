import React, { useState, useEffect, createContext, useContext } from 'react'
const ParContext = createContext()

function Son(){
    let str = useContext(ParContext)
    return (
        <div>
            <h3>我是子组件</h3>
            <p>{str}</p>
        </div>
    )
}

function Reducer(){
    const [text,setText] = useState('')
    const [tip,setTip] = useState('')
    useEffect(() => {
        setText('useReducer 实现 Redux 作用')
        setTip('父组件传递的信息。。。。。。')
        console.log('代替 componentDidMount 和 componentDidUpdate 生命周期函数')
    },[text])
    useEffect(() => {
        return ()=>{ console.log('代替  组件销毁之前 生命周期函数')}
    },[])
    return (
        <div>
            <h3>{text}</h3>
            <h3>我是父组件</h3>
            <ParContext.Provider value={tip}>
                <Son />
            </ParContext.Provider>
        </div>
    )    
}

export default Reducer