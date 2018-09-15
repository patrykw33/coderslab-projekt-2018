import React from "react";

const MapCurrencyToCountry = {
    PLN: "polski złoty",
    EUR: "euro"
};

export default MapCurrencyToCountry;

// const MapCurrencyToCountryObj = {
//     1: {
//         id : "PLN",
//         name:'polski złoty'
//     },
//     2: {
//         id: "EUR",
//         name:'euro'
//     }
// };



// class MapCurrencyToCountry extends React.Component {
//
//     renderObject(){
//         return Object.entries(MapCurrencyToCountryObj).map(([key, value], i) => {
//             return (
//                 <div key={key}>
//                     id is: {value.id};
//                     name is: {value.name}
//                 </div>
//             )
//         })
//     }
//
//     render(){
//         return(
//             <div>
//                 {this.renderObject()}
//             </div>
//         )
//     }
// }

/*const newMapCurrency = ({isoCode, currenciesIso}) =>
    (
         <div className="onHoverinTable">
            {
                currenciesIso.map(isoCode => (<span>{isoCode}</span>))
            }
        </div>
    )*/


// export default MapCurrencyToCountry;
