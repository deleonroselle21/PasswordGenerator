import React from 'react'
import './generated-code.css'
import CopyIcon from '../../images/icon-copy.svg'

const GeneratedCode = (props) => {
  return (
    <div className='generatedCode__container'>
        <h1>{props.generatedCode}</h1>
        <img src={CopyIcon} alt="" />
    </div>
  )
}

export default GeneratedCode