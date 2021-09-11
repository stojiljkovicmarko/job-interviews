import React from "react";
import style from "-/Footer.css";

const Footer = React.createClass({
    render: function() {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
});

export default Footer
