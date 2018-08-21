import React from "react";
import ExchangeRate from "./ExchangeRate";

// convert(base, dest, data) {
//     const baseRate = this.state.data.rates[base.toUpperCase()];
//     const destRate = this.state.data.rates[dest.toUpperCase()];
//
//     return parseFloat(destRate, 10) / parseFloat(baseRate, 10);
// }



const ExchangeRatesRow = ({from, currencies, data}) => {
    console.log({from, currencies, data});
    return (
        <tbody>
            <tr>
                <td className="columnCurrencies">{from}</td>
                {currencies.map(currency => <td key={currency + "_exchange_rate"}>

                   {(data.rates[currency] / data.rates[from]).toFixed(2)}

                </td>)}
            </tr>
        </tbody>
    );
};

const ExchangeRatesMatrix = ({data, currencies}) => <div className="pierwsza">
    <table className="tableToMake">
        <tr>
            <td className="currencyTypes">Currency:</td>
            {currencies.map(currency => <td key={currency + "_header"}>{currency}</td>)}
        </tr>

        {currencies.map(from => <ExchangeRatesRow from={from} currencies={currencies} data={data}
                                                  key={from + "_row"}/>)}
    </table>
</div>;

export default ExchangeRatesMatrix;