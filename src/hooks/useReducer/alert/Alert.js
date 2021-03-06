import React from 'react'
import {useAlert} from './AlertContext'

const divStyles = {
    background: 'pink',
    fontSize: '18px',
    marginBottom: '20px',
    padding: '10px 20px',
}

export default function Alert() {

    const alert = useAlert()

    if (!alert.visible) return null
 
    return (
        <div onClick={alert.hide} style={divStyles}>
            {alert.text}
        </div>
    )
}