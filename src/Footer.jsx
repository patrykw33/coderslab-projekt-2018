import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialBtn fb">
                <SocialIcon url="https://www.facebook.com/patryk.watras.9/" />
            </div>

            <div className="socialBtn twit">
                <SocialIcon url="http://twitter.com" />
            </div>

            <div className="socialBtn linkedin">
                <SocialIcon url="https://www.linkedin.com/in/patryk-watras-8a5741153/" />
            </div>
        </div>
        )
};

export default Footer;