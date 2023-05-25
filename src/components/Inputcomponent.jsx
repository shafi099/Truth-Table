import React, { useState } from 'react'

const Inputcomponent = (props) => {
    const truefalse = (event) => {
        props.TrueFalse(props.value, event.target.value)
    }


    return (
        <div>
            <input type="text" id="ArgName" name="ArgName" value={props.value} />
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