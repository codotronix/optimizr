import React from 'react'
import './style.css'

const IOTextareaCombo = props => {
    const { placeholder1, placeholder2 } = props
    return (
        <div className="iotextarea">
            <div className="ta-container">
                <textarea placeholder={placeholder1 || ''}></textarea>
            </div>
            <div className="lefttoright">click</div>
            <div className="ta-container">
                <textarea placeholder={placeholder2 || ''}></textarea>
            </div>
        </div>
    )
}

export default IOTextareaCombo