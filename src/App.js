import logo from './logo.svg';
import React from 'react'
import './App.css';
import './index.css';
import GeneratedCode from './components/GeneratedCode/GeneratedCode'
import SettingAdjustment from './components/SettingAdjustment/SettingAdjustment';
import { useState } from 'react';

function App() {
  const [sliderValue,setSliderValue]=React.useState(10);
  const [code,setCode]=React.useState("");
  const [strengthValue,setStrength]=React.useState("METER");
  //const [strengthLength,setStrength]=React.useState(0);
  const [checkBoxValue,setcheckBoxValue]=React.useState({
      includesUppercase:false,
      includesLowercase:false,
      includesNumbers:false,
      includesSymbol:false
  })
  let strength=0;
 // const [strength,setStrength]=React.useState("");

 // const letterList=['a','b','c','d'];
  const letterList = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
  const upperLetterList = letterList.map(function(x){ return x.toUpperCase(); })
  const numberList = ['0', '1', '2','3','4','5','6','7','8','9'];
const symbols = ['!', '@', '#', '$','%', '^', '&', '*'];
const [styleslider,setStyleSlider]=React.useState("");
  const handleChange=(event)=>{
      

      setSliderValue(event.target.value);

      let value = (event.target.value-event.target.min.min)/(event.target.max-event.target.min)*100
  
 setStyleSlider(`linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${(event.target.value-event.target.min)/(event.target.max-event.target.min)*100}%, #DEE2E6 ${(event.target.value-event.target.min)/(event.target.max-event.target.min)*100}%, #DEE2E6 100%)`);
   
  }
  const handleCheckChange=(event)=>{
      const {name,checked}=event.target;
      
      setcheckBoxValue(prevValue=>({
          ...prevValue,
          [name]:checked
      }));
   
  }
  const handleSubmit=()=>{
      let random;
      let generatedArray=[];
     //console.log(generatedArray);
    
   while(generatedArray.length<sliderValue){
if(checkBoxValue.includesNumbers===true){

  random = numberList[Math.floor(Math.random()*numberList.length)]
  generatedArray.push(random);
 
}
  if(checkBoxValue.includesLowercase===true){
  random = letterList[Math.floor(Math.random()*letterList.length)]
  generatedArray.push(random)
 
}
   if(checkBoxValue.includesUppercase===true){
  random = upperLetterList[Math.floor(Math.random()*upperLetterList.length)]
  generatedArray.push(random)
  
}
 if(checkBoxValue.includesSymbol===true){
  random = symbols[Math.floor(Math.random()*symbols.length)]
  generatedArray.push(random)

}
   }
  //setCode(generatedArray);
  let shuffled = generatedArray
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
 setCode(shuffled);



        Object.keys(checkBoxValue).forEach(function(key) {
          if (checkBoxValue[key] == true) {
            strength=strength+1;
          }
        });
        console.log(strength)
        if(strength==1){
          setStrength("TOO WEAK!")
        }
        if(strength==2){
          setStrength("WEAK")
        }
        if(strength==3){
          setStrength("MEDIUM")
        }
        if(strength==4){
          setStrength("STRONG")
        }
   
   
    
 



   

    }
    /*
    const handleStrength=()=>{
      setStrength(strengthLength+1);
      if(strengthLength===2){
      console.log("weak")
      }
      if(strengthLength===3){
        console.log("medium")
        }
        if(strengthLength===4){
          console.log("Strong")
          }
          if(strengthLength===1)
          {
            console.log("super weak")
          }
    }
    */


  
  
  return (
  
    <div className='container'>
      
     <div className='main__container'>
     <h1 className='title'>Password Generator</h1>
     < GeneratedCode generatedCode={code}/>
    <SettingAdjustment  styleslider={styleslider} sliderValue={sliderValue} checkBoxValue={checkBoxValue} handleChange={handleChange} handleCheckChange={handleCheckChange} handleSubmit={handleSubmit} strength={strengthValue}/>
    

   

  

     </div>



    </div>
  );
}

export default App;
