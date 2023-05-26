import React, { useEffect, useState } from 'react';
import InputComponent from './components/Inputcomponent';
import OptionsComp from './components/OptionsComp';

function App() {
  const [data, setData] = useState({});
  const [Input, setInput] = useState(1);
  const [OutputVal, setOutputVal] = useState(1);
  const [result, setResult] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [arg1Result, setArg1Result] = useState('');
  const [arg2Result, setArg2Result] = useState('');
  const [OR1Result, setOR1Result] = useState('');
  const [OR2Result, setOR2Result] = useState('');

  // useEffect(() => {
  //   console.log(data, 'llll');
  // }, [data]);

  const truefalse = (name, val) => {
    setData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
    // console.log(name)
    if(selectedValue==='and'){
      // const selectedName = 'MyArg2';
      // console.log('called')
AND_opt1(name);
AND_opt2(name);
    }
  };

  const Input_Count = () => {
    const components = [];
    for (let i = 0; i < Input; i++) {
      const name = `My Arg${i}`;
      const trueFalseValue = data[name];
      components.push(
        <InputComponent
          key={i}
          name={name}
          truefalse={truefalse}
          value={trueFalseValue}
          result={result}
          setResult={setResult}
        />
      );
    }
    return components;
  };

  const Options_Count = () => {
    const components = [];
    for (let i = 0; i < OutputVal; i++) {
      components.push(
        <OptionsComp
          key={i}
          handleSelectChange={handleSelectChange}
          selectedValue={selectedValue}
          handleConst={handleConst}
          handleInputArgs={handleInputArgs}
          AND_opt1={AND_opt1}
          AND_opt2={AND_opt2}
          OR_opt1={OR_opt1}
          OR_opt2={OR_opt2}
          options={options}
          inputReset={inputReset}
        />
      );
    }
    return components;
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputArgs = (event) => {
    const selectedName = event.target.value;
    const res = data[selectedName] || '';
    setResult(res);
  };

  const handleConst = (event) => {
    const selectedName = event.target.value;
    setResult(data[selectedName]);
  };

  const options = () => {
    const inputOptions = [];
    for (const key in data) {
      inputOptions.push(
        <option key={key} value={key}>
          {key}
        </option>
      );
    }
    return inputOptions;
  };

  const AND_opt1 = (eventOrSelectedName) => {
    let selectedName;
    
    if (typeof eventOrSelectedName === 'object') {
      selectedName = eventOrSelectedName.target.value;
    } else {
      selectedName = eventOrSelectedName;
    }
    
    setArg1Result(data[selectedName]);
  
    if (arg2Result !== '') {
      if (data[selectedName] === 'true' && arg2Result === 'true') {
        setResult('true');
      } else {
        setResult('false');
      }
    }
  };
  
  const AND_opt2 = (eventOrSelectedName) => {
    let selectedName;
    
    if (typeof eventOrSelectedName === 'object') {
      selectedName = eventOrSelectedName.target.value;
    } else {
      selectedName = eventOrSelectedName;
    }
    
    setArg2Result(data[selectedName]);
  
    if (arg1Result !== '') {
      if (arg1Result === 'true' && data[selectedName] === 'true') {
        setResult('true');
      } else {
        setResult('false');
      }
    }
  };
  

  // const AND_opt2 = (event) => {
  //   const selectedName = event.target.value;
  //   setArg2Result(data[selectedName]);

  //   if (arg1Result !== '') {
  //     if (arg1Result === 'true' && data[selectedName] === 'true') {
  //       setResult('true');
  //     } else {
  //       setResult('false');
  //     }
  //   }
  // };

  const OR_opt1 = (event) => {
    if(event.target.value!=''){
    const selectedName = event.target.value;
    setOR1Result(data[selectedName]);

    if (OR2Result !== '') {
      if (data[selectedName] === 'true' || OR2Result === 'true') {
        setResult('true');
      } else {
        setResult('false');
      }
    }}
    else{
      const selectedName = event;
    setOR1Result(data[selectedName]);

    if (OR2Result !== '') {
      if (data[selectedName] === 'true' || OR2Result === 'true') {
        setResult('true');
      } else {
        setResult('false');
      }
    }
  }
}

  const OR_opt2 = (event) => {
    const selectedName = event.target.value;
    setOR2Result(data[selectedName]);

    if (OR1Result !== '') {
      if (OR1Result === 'true' || data[selectedName] === 'true') {
        setResult('true');
      } else {
        setResult('false');
      }
    }
  };

  const inputReset = () => {
    setSelectedValue('');
    setResult('');
  };

  return (
    <>
      {Input_Count()}
      <button onClick={() => setInput(Input + 1)}>+ add arg</button>
      <br />
      {Options_Count()}
      {/* <button onClick={() => setOutputVal(OutputVal + 1)}>+ add op</button> */}
      <br />
      <span>result: {result}</span>
    </>
  );
}

export default App;
