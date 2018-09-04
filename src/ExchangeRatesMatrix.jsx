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
                <th>{from}</th>
                {currencies.map(currency => <td key={currency + "_exchange_rate"}>

                   {(data.rates[currency] / data.rates[from]).toFixed(4)}

                </td>)}
            </tr>
        </tbody>
    );
};

const ExchangeRatesMatrix = ({data, currencies}) => <div className="table">
    <table className="tableToMake">
        <tr>
            <th className="currencyTypes">Currency:</th>
            {currencies.map(currency => <th key={currency + "_header"}>{currency}</th>)}
        </tr>

        {currencies.map(from => <ExchangeRatesRow from={from} currencies={currencies} data={data}
                                                  key={from + "_row"}/>)}
    </table>
</div>;

export default ExchangeRatesMatrix;