import React, { useRef } from 'react'
import './style.css'

const IOTextareaCombo = props => {
    const { placeholder1, placeholder2, onConvert, value2 } = props
    const ref1 = useRef()

    const handleConvert = e => {
        onConvert(ref1.current.value)
    }

    return (
        <div className="iotextarea">
            <div className="ta-container">
                <textarea 
                    ref={ref1} 
                    placeholder={placeholder1 || ''}
                    spellcheck="false"
                ></textarea>
            </div>
            <div className="lefttoright" onClick={handleConvert}>click</div>
            <div className="ta-container">
                <textarea 
                    placeholder={placeholder2 || ''} 
                    value={value2}
                    spellcheck="false"
                ></textarea>
            </div>
        </div>
    )
}

export default IOTextareaCombo