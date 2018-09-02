import React from "react";

class Name extends React.Component {
    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <div className='name'>
                <button className="btn" onClick={ this.props.onClick }>
                    Select Currency
                </button>
            </div>
        );
    }
}

export default Name;

