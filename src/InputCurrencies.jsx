import React from "react";

const InputCurrencies = ({ onChange }) => {
    return (
        <form>
            <ul>
                <li>
                    <label>
                        Name:<input type="text" name="name" onChange={ (event) => onChange(
                            event.target.value.split(/[ ,]+/).filter(Boolean)
                    )}/>
                    </label>
                </li>
            </ul>
        </form>
    )
};

export default InputCurrencies;