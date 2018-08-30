import React from "react";

/*

const Name = () => {
    return (
        <div className="name">
            <table className="head">
                <button className="btn rest">
                    Select Currency
                </button>
            </table>
        </div>
    )
};
*/



//Do poprawy

class Name extends React.Component {
    handleClick () {
        const element = this.refs.element;
        console.log(element);
        element.classList.remove('hidden');
    };

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <div className='name'>
                <table className="head">
                    <button className="btn" onClick={(e) => this.handleClick(e)}>
                        Select Currency
                    </button>
                </table>
            </div>
        );
    }
}



export default Name;

