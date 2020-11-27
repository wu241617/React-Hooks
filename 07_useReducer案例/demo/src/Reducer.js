import React from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './color'
import './Reducer.css'

function Reducer(){
    return (
        <div id="container">
            <Color>
                <Buttons />
                <ShowArea />
            </Color>
        </div>
    )
}

export default Reducer