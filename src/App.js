import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Recipe from "./components/Recipe";
import Categories from "./components/Categories";
import ScrollToTop from "./components/ScrollToTop";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  return (
    <div className="App">
        <ScrollToTop />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact component={Searchbar} />
                  <Route path="/recipe" component={Recipe} />
                  <Route path="/categories" component={Categories} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
    </div>
  );
};
export default App;
