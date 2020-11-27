
import React, { useReducer } from 'react'

function Reducer1(){
    const [count, dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },0)

    return (
        <div>
            <h3>现在的分数是: {count}</h3>
            <button onClick={()=>{dispatch({type:'add'})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'sub'})}}>Decrement</button>
        </div>
    )
}

export default Reducer1