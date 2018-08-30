import React from "react";

class Header extends React.Component {
    constructor() {
        super();

        const today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                Today is: {this.state.date}
            </div>
        );
    }
}

export default Header;