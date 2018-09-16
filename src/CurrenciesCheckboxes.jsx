import React from "react";
import MapCurrencyToCountry from "./MapCurrencyToCountry";



function spitStringInTwo(string, match) {
    var sLength = string.length;
    var mLength = match.length;
    if (string.startsWith(match)) {
        return [match, string.slice(mLength)]
    }
   return ["", string]
}



const CurrenciesCheckboxes = ({ currencies, selected, onChange, onMouseEnter, highlightedText }) => {
    return (
        <div className="currenciesSelection">

            { currencies.map(currency => {

                const [ partMatchingHighlightedText, restOfTheText ] = spitStringInTwo(currency, highlightedText);

                console.log({ partMatchingHighlightedText, restOfTheText });

                return (

                    <span key={ currency + "_checkbox"}
                          title={ MapCurrencyToCountry[currency] }>
                        <input
                            type="checkbox"
                            checked={ selected.indexOf(currency) !== -1 }
                            onChange={ event => {
                                if (selected.indexOf(currency) === -1) {
                                    onChange([ ...selected, currency ]);
                                } else {
                                    onChange(selected.filter(selectedCurrency => selectedCurrency !== currency))
                                }
                            } }
                        />
                            <label
                                onClick={ event => {
                                    if (selected.indexOf(currency) === -1) {
                                        onChange([ ...selected, currency ]);
                                    } else {
                                        onChange(selected.filter(selectedCurrency => selectedCurrency !== currency))
                                    }
                                } }
                                >

                                <span style={{ fontWeight: "bold", color: "#334751", fontSize:"16px", letterSpacing: "2px" }}
                                >{ partMatchingHighlightedText }</span>{ restOfTheText }
                                </label>

                    </span>
                );
            })}
        </div>


    );
};

export default CurrenciesCheckboxes;