import React, { Component } from "react";
import Contacts from "./component/contacts/Contacts";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import About from "./component/pages/About";
import Notfound from "./component/pages/Notfound";
import { Provider } from "./context";
import AddContact from "./component/contacts/AddContact";
import EditContact from "./component/contacts/EditContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <React component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
