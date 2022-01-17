import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./Navbar";
import Blog from "./blog";
import Services from "./Services";
import Footer from "./Footer";
import WashingMachine from "./WashingMachine/WashingM";
import Register from "./Register/Register";
import User from "./UserProfile/User";

function App() {
  useEffect(() => {
    document.title = `Join with Epic Home Service`;
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/washingMachine" component={WashingMachine} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/userProfile" component={User} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
