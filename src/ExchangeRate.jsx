import React from "react";


class ExchangeRate extends React.Component {
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
        fetch(`//data.fixer.io/api/latest?access_key=f0d74f368a330a68a76b4f61a07ee799`)
            .then(response => response.json())
            .then(crRate => this.setState({data: crRate}));
    }

    convert(base, dest = this.props.currency.toUpperCase()) {
        if (!this.state.data) {
            return false;
        }
        const baseRate = this.state.data.rates[base.toUpperCase()];
        const destRate = this.state.data.rates[dest.toUpperCase()];

        return parseFloat(destRate, 10) / parseFloat(baseRate, 10);
    }

    renderData() {
        return <div> 100 PLN = { (100 * this.convert("PLN")).toFixed(2) } {this.props.currency}</div>
    }




    render() {
        return (
            <React.Fragment>
                { this.state.data && this.renderData() }
                { !this.state.data && <div>"Loading..." {this.props.currency }</div> }
            </React.Fragment>
        )
    }
}

//zapytanie na DidMount, po przyjściu ustawić stany (setState)
//w konstruktorze ustawić początkowy stan
//w render wyświetlić ten stan


export default ExchangeRate;