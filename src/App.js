import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./common/components/Header";
import Signup from "./views/Signup";
import Signin from "./views/Signin";
import Footer from "./common/components/Footer";
import ForgotPassword from "./views/ForgotPassword";
import Account from "./views/Account";
import LandingPage from "./views/LandingPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/sign-in">
          <Signin />
        </Route>
        <Route exact path="/sign-up">
          <Signup />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
