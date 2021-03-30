// pages/Home.js

import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const Home = () => (
    <div className="App">
        <h1 className="title is-1">Native Pages</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
        </p>

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to="/about">About</Link>
        </header>
    </div >
);

export default Home;