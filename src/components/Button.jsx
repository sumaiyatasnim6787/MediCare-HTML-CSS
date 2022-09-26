import React from 'react'
import './form.css'

const Button = (props) => {
  return (
    <button onClick={props.func}>{props.name}</button>
  )
}

export default Button