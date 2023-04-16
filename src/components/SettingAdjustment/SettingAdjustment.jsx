import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import './setting-adjustment.css'
import GeneratedCode from '../GeneratedCode/GeneratedCode'
import Checkbox from '../Checkbox/Checkbox'

const SettingAdjustment = (props) => {
    return (
    <div className='setting__container'>
       
        <div className='character-length'>
        <p className='setting-title'>Character Length</p>
        <p className='slider-value'>{props.sliderValue}</p>
        </div>
        <div className="slidecontainer">
            <input onChange={props.handleChange} type="range" min="1" value={props.sliderValue} max="20"  className="slider"  />
        </div>

  <div className='check__container'>
   <Checkbox text="Includes Uppercase Letters" checked={props.checkBoxValue.includesUppercase} onChange={props.handleCheckChange} name="includesUppercase" />

  <Checkbox text="Includes Lowercase Letters" checked={props.checkBoxValue.includesLowercase} onChange={props.handleCheckChange} name="includesLowercase" />
  
  <Checkbox text="Includes Numbers" checked={props.checkBoxValue.includesNumbers} onChange={props.handleCheckChange} name="includesNumbers" />
  <Checkbox text="Includes Symbol" checked={props.checkBoxValue.includesSymbol} onChange={props.handleCheckChange} name="includesSymbol" />
  </div>

  <div className='strength__container'>
    <p>STRENGTH</p>
    <div className='strength-meter'>
        <p>medium</p>
        <div className='strength-bar'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>


  </div>

  <button onClick={props.handleSubmit}>Generate</button>
    </div>
   
)}

export default SettingAdjustment