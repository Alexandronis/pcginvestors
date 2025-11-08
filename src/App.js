import React from "react";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import "./style/main.scss";

import About from "./component/about";
import Home from "./component/home";
import Contact from "./component/contact";
import PortfolioPage from "./component/portfolioPage";
import ClientPage from "./component/clientPage";
import Header from "./component/header";
import NotFoundPage from "./404";
import CharitableContributions from "./component/CharitableContributions";
import Footer from "./component/footer";


function App() {
  return (
    <div className="App">
      <Route
        path={"(.+)"}
        render={() => (
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio-page" component={PortfolioPage} />
              {/* <Route exact path="/charitable-contributions" component={CharitableContributions} /> */}
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/client-page" component={ClientPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer/>
          </>
        )}
      />
    </div>
  );
}

export default App;
