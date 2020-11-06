import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../auth";
import HomePage from "./Home";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import NavBar from "./NavBar";
import AddProductPage from "./AddProduct";
import SingleProductPage from "./SingleProduct";
import CartPage from "./Cart";
import HistoryPage from "./History";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <NavBar />
        <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
          <Switch>
            <Route exact path="/" component={Auth(HomePage, true)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/product/add"
              component={Auth(AddProductPage, true)}
            />
            <Route
              exact
              path="/product/:productId"
              component={Auth(SingleProductPage, null)}
            />
            <Route exact path="/user/cart" component={Auth(CartPage, true)} />
            <Route exact path="/history" component={Auth(HistoryPage, true)} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
