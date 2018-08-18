import React from "react";
import ExchangeRate from "./ExchangeRate";

// convert(base, dest, data) {
//     const baseRate = this.state.data.rates[base.toUpperCase()];
//     const destRate = this.state.data.rates[dest.toUpperCase()];
//
//     return parseFloat(destRate, 10) / parseFloat(baseRate, 10);
// }

const ExchangeRatesRow = ({ from, currencies, data }) => {
    return (
        <tr>
            <td>{ from }</td>
            { currencies.map(currency => <td key={currency + "_exchange_rate"} >

                Kurs wymiany z { from } na { currency }

            </td>) }
        </tr>
    );
};

const ExchangeRatesMatrix = ({ data, currencies }) => <div>
    <table>
        <th>
            <td>Currency:</td>{ currencies.map(currency => <td key={ currency + "_header" }>{ currency }</td>) }
        </th>

        { currencies.map(from => <ExchangeRatesRow from={from} currencies={ currencies } data={data} key={ from + "_row" }/>) }


    </table>
</div>;

export default ExchangeRatesMatrix;