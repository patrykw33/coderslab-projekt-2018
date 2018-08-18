import React from "react";

let reactMatrix = require("react-matrix");

React.createClass({
    getInitialState: function () {
        return {
            matrix: [
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
            ]
        }
    },

    render: function () {
        return (
            <Matrix squareSize={20} matrix={this.state.matrix} />
        );
    }
});

export default Clipboard;