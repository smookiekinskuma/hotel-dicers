import React from 'react'

interface Props {
    children: string
}

const Button = ({ children }: Props) => {
    return (
        <button className=''>{children}</button>
    )
}

export default Button