import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Detail from "./Detail";
import Home from "./Home";
import Footer from "./Footer";
import SignIn from "./SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default connect()(App);
