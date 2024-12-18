import React from 'react'
import './Input.css'

interface IInputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({value, setValue}: IInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
    return (
    <input type={value} onChange={onChange} />
  )
}

export default Input