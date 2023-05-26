import React from 'react'

const OptionsComp = (props) => {
  return (<>
    <select name="select" id="select" onChange={props.handleSelectChange} value={props.selectedValue}>
    <option value="" disabled selected hidden>
      select...
    </option>
    <option value="constant">constant</option>
    <option value="argument">argument</option>
    <option value="and">and</option>
    <option value="or">or</option>
  </select>

  {props.selectedValue === 'constant' && (
    <select name="constSelect" id="constSelect" onChange={props.handleConst}>
      <option value="" disabled selected hidden>select...</option>
      {props.options()}
    </select>
  )}

  {props.selectedValue === 'argument' && (
    <select name="argSelect" id="argSelect" onChange={props.handleInputArgs}>
      <option value="" disabled selected hidden>
        select...
      </option>
      {props.options()}
    </select>
  )}

{props.selectedValue === 'and' && (
<>
<select name="argSelect1" id="argSelect1" onChange={props.AND_opt1}>
  <option value="" disabled selected hidden>
    select...
  </option>
  {props.options()}
</select>
<select name="argSelect2" id="argSelect2"  onChange={props.AND_opt2}>
  <option value="" disabled selected hidden>
    select...
  </option>
  {props.options()}
</select>
</>
)}


{props.selectedValue === 'or' && (
<>
<select name="ORSelect1" id="ORSelect1" onChange={props.OR_opt1}>
  <option value="" disabled selected hidden>
    select...
  </option>
  {props.options()}
</select>
<select name="ORSelect2" id="ORSelect2"  onChange={props.OR_opt2}>
  <option value="" disabled selected hidden>
    select...
  </option>
  {props.options()}
</select>
</>
)}
<button onClick={props.inputReset}>X</button>
<br/>
  </>)
}

export default OptionsComp