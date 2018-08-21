import React from "react";

const InputCurrencies = ({ onChange }) => {
    return (
        <form>
            <label>
                Name:<input type="text" name="name" onChange={ (event) => onChange(
                    event.target.value.split(/[ ,]+/).filter(Boolean)
            )}/>
            </label>
        </form>
    )
};

export default InputCurrencies;