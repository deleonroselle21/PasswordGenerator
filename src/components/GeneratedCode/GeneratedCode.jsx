import React from 'react'
import './generated-code.css'
import CopyIcon from '../../images/icon-copy.svg'

const GeneratedCode = (props) => {


  const initialcode="P4$5W0rD!";

  return (
    <div className='generatedCode__container'>
       {props.generatedCode===""?<h1 style={{color:"gray"}}>{initialcode}</h1>:<h1>{props.generatedCode}</h1>} 
        <div className='copy__container'>
        <img src={CopyIcon} alt="copy_icon" />
        </div>
    </div>
  )
}

export default GeneratedCode