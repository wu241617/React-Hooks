import React, { useContext } from 'react'
import {ColorContext} from './color'
import './Reducer.css'

function ShowArea(){
    const {color} = useContext(ColorContext)
    return (
        <h3 style={{color:color}}
        >useReducer 小案例 ---》 字体颜色更改</h3>
    )
}

export default ShowArea