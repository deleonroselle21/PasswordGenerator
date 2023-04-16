import React from 'react'
import './checkbox.css'


const Checkbox = (props) => {
  return (
    <div>
         <label className="checkbox__container">{props.text}
  <input type="checkbox" name={props.name} checked={props.checked} onChange={props.onChange/*()=>setcheckBoxValue(!checkBoxValue.includesLowercase)*/}/>
  <span className="checkmark"></span>
  {console.log(props.checked)}
</label>
       

       
    </div>
  )
}

export default Checkbox
{/*
<label className="checkbox__container">One
  <input type="checkbox" name="includesLowercase" checked={checkBoxValue.includesLowercase} onChange={handleCheckChange/*()=>setcheckBoxValue(!checkBoxValue.includesLowercase)}/>
  <span className="checkmark"></span>
  {console.log(checkBoxValue.includesLowercase)}
</label>

<label className="checkbox__container">One
  <input type="checkbox" name="includesUppercase" checked={checkBoxValue.includesUppercase} onChange={handleCheckChange/*()=>setcheckBoxValue(!checkBoxValue.includesLowercase)
}/>
  <span className="checkmark"></span>
  {console.log(checkBoxValue.includesUppercase)}
</label>

*/}