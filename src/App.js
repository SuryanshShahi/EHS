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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
