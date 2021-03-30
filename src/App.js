import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import AppUrlListener from './AppUrlListener';

function App() {
  return (
    <AppUrlListener></AppUrlListener>
    // <BrowserRouter>
    //   <div className="container mt-2" style={{ marginTop: 40 }}>
    //     <AppUrlListener></AppUrlListener>
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;