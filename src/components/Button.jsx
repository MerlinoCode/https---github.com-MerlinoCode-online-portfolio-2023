import React from 'react'

const Button = (props) => {
    return (
        <a className='mail-link' href='mailto:jonathan.leonel.merlino@gmail.com' target="_blank" rel="noopener noreferrer">
            {props.text}
        </a>
    )
}

export default Button