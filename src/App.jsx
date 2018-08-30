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
            currencies: ["USD", "PLN", "GBP", "EUR"]
        }
    }

    handleClick () {
        const element = this.refs.element;
        console.log(element);
        element.classList.remove('hidden');
    };

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
                <div className="container">
                    <div className="header hidden">
                        <Header/>
                    </div>
                    <div ref="element" className="sectionWithTable hidden">
                        { this.state.data && <ExchangeRatesMatrix currencies={ this.state.currencies } data={ this.state.data } /> }
                    </div>
                    <div className="selectCurrency">
                        <Name/>
                    </div>
                    <div ref="element" className="sectionWithSelection hidden">
                        {  this.state.data && <CurrenciesCheckboxes selected={ this.state.currencies } currencies={ Object.keys(this.state.data.rates) } onChange={ selected => {
                            this.setState({ currencies: selected.slice(-5)});
                        } }/>}
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


export default App;