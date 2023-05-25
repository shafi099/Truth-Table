import React, { useState } from 'react'

const Inputcomponent = (props) => {
    const truefalse = (event) => {
        // console.group(props.value, event.target.value,props.id)
        console.log(event.target.value)
        props.TrueFalse(props.value, event.target.value)
    }


    return (
        <div>
            <input type="text" id="ArgName" name={props.name} defaultValue={props.value} onChange={truefalse}/>
            <select name="TrueFalse" id="TrueFalse" onChange={truefalse}>
                <option value="" disabled selected hidden>
                    select...
                </option>
                <option value="false">false</option>
                <option value="true">true</option>
            </select>
        </div>
    )
}

export default Inputcomponent