import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <ul>
        <li key="main">
            <Link to="/">Strona główna</Link>
        </li>
        <li key="about-us">
            <Link to="/about/us">O nas</Link>
        </li>
        <li key="about-company">
            <Link to="/about/company">O firmie</Link>
        </li>
    </ul>
);

export default Navigation;