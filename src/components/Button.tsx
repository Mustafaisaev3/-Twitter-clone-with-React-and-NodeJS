import React from 'react'

interface ButtonType {
    children?: any,
    onClick: () => void,
    type?: any,
    buttonStyle?: string,
    buttonSize?: string,
}

const Button = ({children, onClick, type, buttonStyle, buttonSize, ...rest}: ButtonType) => {
  return (
    <button onClick={() => onClick()} type={type} {...rest} className={`btn ${buttonStyle} mb-[10px] w-full cursor-pointer`}>
        {children}
    </button>
  )
}


export default Button