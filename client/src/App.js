import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Toaster
        position="button-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
