import React, { useState } from 'react'
import axios from 'axios'
import { IOTextareaCombo } from '../../common'

const JSTab = () => {
    const [result, setResult] = useState('')

    const onConvert = code => {
        console.log(code)
        axios.post('/api/minify-js', { code: code.toString() })
        .then(res => {
            const { code, error } = res.data.result
            if(code) {
                setResult(code)
            }
            else {
                console.log(error)
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="">
            <IOTextareaCombo 
                placeholder1="PASTE YOU JAVASCRIPT HERE ..."
                placeholder2="MINIFIED JAVASCRIPT"
                onConvert={onConvert}
                value2={result}
            />
        </div>
    )
}

export default JSTab