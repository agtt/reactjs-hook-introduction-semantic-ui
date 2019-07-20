import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Redux/Reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Users from "./Layouts/Users";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import TodoList from "./Layouts/TodoList";
import { Container } from "semantic-ui-react";
import Login from "./Layouts/Login";

const store = createStore(Reducers, applyMiddleware(thunk));
console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Container style={{ margin: 20 }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
