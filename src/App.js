import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter, useHistory } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import AppUrlListener from './AppUrlListener';
import { Plugins } from "@capacitor/core";
const { App: CapApp } = Plugins;

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;