import React from 'react'

const InputText = ({
  inputValue,
  eventListener
}) => (
  <input
    value={ inputValue }
    onChange={ eventListener }
  />
)

export default InputText