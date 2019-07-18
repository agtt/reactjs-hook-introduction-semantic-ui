import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Users from "./Layouts/Users";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Container } from "semantic-ui-react";
import Login from "./Layouts/Login";

const Routers = () => {
  return (
    <Container style={{ margin: 20 }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Routers />, rootElement);
