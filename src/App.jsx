import React from "react";
import ExchangeRatesMatrix from "./ExchangeRatesMatrix";
import CurrenciesCheckboxes from "./CurrenciesCheckboxes";
import Name from "./Name"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            currencies: ["USD", "PLN", "GBP", "EUR"]
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch(`http://data.fixer.io/api/latest?access_key=f0d74f368a330a68a76b4f61a07ee799`)
            .then(response => response.json())
            .then(crRate => this.setState({data: crRate}));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Name/>
                </div>
                <div className="currenciesSelection" >
                    {  this.state.data && <CurrenciesCheckboxes selected={ this.state.currencies } currencies={ Object.keys(this.state.data.rates) } onChange={ selected => {
                        this.setState({ currencies: selected.slice(-5)});
                    } }/>}
                </div>
                <div>
                { this.state.data && <ExchangeRatesMatrix currencies={ this.state.currencies } data={ this.state.data } /> }
                </div>

            </React.Fragment>
        )
    }
}


export default App;