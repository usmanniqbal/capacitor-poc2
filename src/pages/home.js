// pages/Home.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppUrlListener from "../AppUrlListener";
import logo from '../logo.svg';
import { Plugins } from "@capacitor/core";
const { Browser, App } = Plugins;

const Home = () => {
    AppUrlListener();

    const onBrowser = async () => {
        await Browser.open({
            url: "https://capacitorjs.com/"
        })
    }
    const onWindow = () => {
        window.location.replace("/about");
    }
    return (
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
                <button onClick={onBrowser}>Browser.open!</button>
                <button onClick={onWindow}>window.open2!</button>
                <Link to="/about">About</Link>
            </header>
        </div >
    )
};

export default Home;