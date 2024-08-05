import '../components/Button.css'
import React from 'react'



const Button = (props) => {
    return <div>
        <button className='register'>{props.text}</button>
    </div>
}

export default Button;