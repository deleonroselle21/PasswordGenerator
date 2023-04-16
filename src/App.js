import logo from './logo.svg';
import React from 'react'
import './App.css';
import './index.css';
import GeneratedCode from './components/GeneratedCode/GeneratedCode'
import SettingAdjustment from './components/SettingAdjustment/SettingAdjustment';

function App() {
  const [sliderValue,setSliderValue]=React.useState(10);
  const [code,setCode]=React.useState("");
  const [checkBoxValue,setcheckBoxValue]=React.useState({
      includesUppercase:false,
      includesLowercase:false,
      includesNumbers:false,
      includesSymbol:false
  })
  const letterList = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const upperLetterList = letterList.map(function(x){ return x.toUpperCase(); })
  const numberList = ['0', '1', '2','3','4','5','6','7','8','9'];

  
  const handleChange=(event)=>{
      

      setSliderValue(event.target.value);
      console.log(sliderValue);
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
   }
    
   //setCode(generatedArray);
   let shuffled = generatedArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   setCode(shuffled);
  }
  
  return (
  
    <div className='container'>
      
     <div className='main__container'>
     <h1 className='title'>Password Generator</h1>
     < GeneratedCode generatedCode={code}/>
    <SettingAdjustment  sliderValue={sliderValue} checkBoxValue={checkBoxValue} handleChange={handleChange} handleCheckChange={handleCheckChange} handleSubmit={handleSubmit}/>
    

   

  

     </div>



    </div>
  );
}

export default App;
