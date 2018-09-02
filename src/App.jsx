import React from "react";
import ExchangeRatesMatrix from "./ExchangeRatesMatrix";
import CurrenciesCheckboxes from "./CurrenciesCheckboxes";
import Name from "./Name";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            currencies: ["USD", "PLN", "GBP", "EUR"],
            currenciesFilter: "",
            sectionWithTableHidden: true|false,
            sectionWithSelectionHidden: true|false,
            headerHidden: true|false,
            selectCurrency: false,
            footerHidden: true|false,
        }
    }

    handleClick () {
        this.setState(state => {
            return {
                sectionWithTableHidden: ! state.sectionWithTableHidden,
                sectionWithSelectionHidden: ! state.sectionWithSelectionHidden,
                headerHidden: ! state.headerHidden,
                selectCurrency: !state.selectCurrency,
                footerHidden: !state.footerHidden,

            }

        })
    };

    handleChange (event) {
        this.setState({ currenciesFilter: event.target.value.toUpperCase() })
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
                <div className={ `container ${!this.state.sectionWithSelectionHidden && "noBgImg"}`}>
                    <div className={ `headerHidden ${this.state.headerHidden && "hidden"}` }>
                        <Header/>
                    </div>
                    <div ref="element" className={ `sectionWithTable ${this.state.sectionWithTableHidden && "hidden"}` }>
                        { this.state.data && <ExchangeRatesMatrix currencies={ this.state.currencies } data={ this.state.data } /> }
                    </div>
                    <div className={ `selectCurrency ${this.state.selectCurrency && "hidden" && "selectCurrencyNoDisplay"}` }>
                        <Name onClick={(e) => this.handleClick(e)} />
                    </div>
                    <div ref="element" className={ `sectionWithSelection ${this.state.sectionWithSelectionHidden && "hidden"}`}>
                        {  this.state.data && <input type="text" value={this.state.currenciesFilter} placeholder="Enter or Select currency" onChange={this.handleChange.bind(this)}  /> }
                        <div className="listOf">
                            List of World Currencies
                        </div>
                        {  this.state.data && <CurrenciesCheckboxes selected={ this.state.currencies }
                                                                    currencies={ Object.keys(this.state.data.rates).filter(currency => currency.startsWith(this.state.currenciesFilter)) }
                                                                    highlightedText={this.state.currenciesFilter}
                                                                    onChange={ selected => {
                            this.setState({ currencies: selected.slice(-5)});
                        } }/>}
                    </div>
                    <div ref="element" className={ `footerHidden ${this.state.footerHidden && "hidden"}` }>
                        <Footer/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


export default App;