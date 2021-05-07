import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Home from "./Home";
import Checkout from "./Checkout";

export default function App() {
    return (
        <Router>
            <TopBar />

            {/* <Link to="/">Home</Link>
                <Link to="/Checkout">Checkout</Link> */}

            <Switch>
                <Route path="/Checkout">
                    <Checkout />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
