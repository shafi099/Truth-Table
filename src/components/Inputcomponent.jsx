import React from 'react';

const InputComponent = (props) => {

  const changeTrueFalse = (event)=>{
    const val = event.target.value
    props.truefalse(props.name,val)
  }
  return (
    <div>
      <input type="text" defaultValue={props.name} />
      <select name="TrueFalse" id="TrueFalse" onChange={changeTrueFalse}>
      <option value="" disabled selected hidden>
              select...
            </option>
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
    </div>
  );
};

export default InputComponent;
