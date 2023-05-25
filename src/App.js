import './App.css';
import Inputcomponent from './components/Inputcomponent';
import { useState, useEffect } from 'react';


function App() {
  const [result, setResult] = useState('undefined');
  const handleResult = (val) => setResult(val)
  const [input, setInput] = useState(1);
  let id = []
  const [True_OR_False, setTrue_OR_False] = useState(false)
  const TrueFalse = (name, val) => {
    for (let i = 0; i < id.length; i++) {
      if (id[i][0] === name) {
        id[i][1] = val
        handleResult(id[i][1]);
      }
      console.log(id)
    }
  }
  const Input_Count = () => {
    const components = [];

    for (let i = 0; i < input; i++) {
      id.push([`MyArg${i}`, false])
      components.push(<Inputcomponent key={i} value={`MyArg${i}`} TrueFalse={TrueFalse} />);
    }
    return components;
  };

  const arguementOptions = () => {
    const inputOptions = []
    for (let i = 0; i < id.length; i++) {
      inputOptions.push(<option key={i} value={id[i]}>{id[i]}</option>);
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
    console.log(event.target.value)
    for (let i = 0; i < id.length; i++) {
      if (event.target.value === id[i][0]) {
        handleResult(id[i][1]);
      }
    }
  }
  useEffect(() => {
    if (selectedValue === 'constant') {
      // setResult();
      handleResult(argument)
    } else if (selectedValue === 'argument' && argument !== '') {
      // setResult(argument);
      handleResult(argument)
    }
  }, [selectedValue, argument]);

  return (
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
      <div>result: {result}</div>
    </div>
  );
}

export default App;