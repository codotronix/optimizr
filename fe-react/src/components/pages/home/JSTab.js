import React, { useState } from 'react'
import axios from 'axios'
import { IOTextareaCombo, Loader } from '../../common'

const JSTab = () => {
    const [isLoading, setLoading] = useState(false)
    const [result, setResult] = useState('')

    const onConvert = code => {
        console.log(code)
        setLoading(true)
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
        .finally(() => setLoading(false))
    }

    return (
        <div className="">
            { isLoading && <Loader /> }
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