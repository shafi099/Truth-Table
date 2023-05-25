import './App.css';
import Inputcomponent from './components/Inputcomponent';
import { useState, useEffect } from 'react';


function App() {

  
  const [value,setvalue]=useState(false)
  const Input_Count = () => {
    const components = [];

    for (let i = 0; i < input; i++) {
      const temp=[]
      temp.push(`MyArg${i}`)
      temp.push(false)
      id.push(temp)
      components.push(<Inputcomponent key={i} value={`MyArg${i}`} TrueFalse={TrueFalse} id={id}/>);
    }
    return components;
  };






  const [result, setResult] = useState('undefined');
  const handleResult = (val) => setResult(val)
  const [input, setInput] = useState(1);
  let id = []
  // const [True_OR_False, setTrue_OR_False] = useState(false)
  const TrueFalse = (name, val) => {
    for (let i = 0; i < id.length; i++) {
      if (id[i][0] === name) {
        id[i][1] = val
        handleResult(id[i][1]);
        // console.log(id)
      }
      // console.log(id)
    }
  }



  const arguementOptions = () => {
    const inputOptions = []
    for (let i = 0; i < id.length; i++) {
      inputOptions.push(<option key={i} value={id[i]} >{id[i]}</option>);
    };
    return inputOptions;
  }

  const [selectedValue, setSelectedValue] = useState('');
  const [argument, setArgument] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    // setResult();
    handleResult('undefined');
  };

  const handleConst = (event) => {
    setArgument(event.target.value);
    setResult('undefined');
    handleResult('undefined');
  };
  const handleArgue = (event) => {
    // console.log(event.target.value)
    for (let i = 0; i < id.length; i++) {
      if (event.target.value === id[i][0]) {
        handleResult(id[i][1]);
      }
    }
  }
  const handleAnd = (event) => {
    // console.log(typeOf event.target.value)
    console.log(typeof event.target.value);
    // console.log()
    const ANDcompare = []
    for (let i = 0; i < id.length; i++) {
      if (event.target.value === id[i][0]) {
        ANDcompare.push(id[i][1])
        // console.log(id[i])
      }
    }
    // console.log(ANDcompare)
  }
  // const AndOptions = () =>{
  //   components=[]

  //   components.push(inputOptions.push(<option key={i} value={id[i]}>{id[i]}</option>));
  //   components.push(inputOptions.push(<option key={i} value={id[i]}>{id[i]}</option>));
  // }
  useEffect(() => {
    if (selectedValue === 'constant') {
      // setResult();
      handleResult(argument)
    } else if (selectedValue === 'argument' && argument !== '') {
      // setResult(argument);
      handleResult(argument)
    }
    // console.log(id)
  }, [selectedValue, argument]);


  const inputReset = () =>{
    // document.getElementById('select').value=""
    setSelectedValue('')
    // resetinput=''
  }

  return (<>
    <div className="App">
      {Input_Count()}
      <button onClick={() => setInput(input + 1)}>+ add arg</button>
      <br />
      <select name="select" id="select" onChange={handleSelectChange} value={selectedValue}>
        <option value="" disabled selected hidden>
          select...
        </option>
        <option value="constant">constant</option>
        <option value="argument">argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
      {selectedValue === 'constant' && (
        <select name="constSelect" id="constSelect" onChange={handleConst}>
          <option value="" disabled selected hidden>select...</option>
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
      )}
      {selectedValue === 'argument' && (
        <select name="argSelect" id="argSelect" onChange={handleArgue}>
          {/* <option value="false">false</option>
          <option value="true">true</option> */}
          <option value="" disabled selected hidden>
            select...
          </option>
          {arguementOptions()}
        </select>
      )}
      {selectedValue==='and' && (<>
        <select name="andSelect" id="andSelect" onChange={handleAnd}>
        <option value="" disabled selected hidden>
          select...
        </option>
        {arguementOptions()}
      </select>
       <select name="andSelect" id="andSelect" onChange={handleAnd}>
       <option value="" disabled selected hidden>
         select...
       </option>
       {arguementOptions()}
     </select></>
      )}
      <button onClick={inputReset}>X</button>
      <div>result: {result}</div>
    </div>


<div>{id}</div></>
  );
}

export default App;