import React from "react";
import ExchangeRatesMatrix from "./ExchangeRatesMatrix";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
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
                { this.state.data && <ExchangeRatesMatrix currencies={ ["USD", "PLN", "GBP"] } data={ this.state.data } /> }
            </React.Fragment>
        )
    }
}


export default App;