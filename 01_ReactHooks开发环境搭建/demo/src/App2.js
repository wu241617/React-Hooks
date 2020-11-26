// Hooks ，函数方式写组件
import React, { useState, createContext, useContext } from 'react'
import './App.css'

const TimesContext =  createContext()

function Counter(){
    let times =  useContext(TimesContext)
    return (<h3>{times}</h3>)
}

function App(){
    // 设置状态和改变状态
    const [ times, setTimes] =  useState(0)
    return(
        <div id="container">
            <h3>{'You are clicked ' + times  +' times'}</h3>
            <button onClick={() => {setTimes(times+1)}}>Click me</button>
            <TimesContext.Provider value={times}>
                <Counter />
            </TimesContext.Provider>
        </div>
    )
}

export default App