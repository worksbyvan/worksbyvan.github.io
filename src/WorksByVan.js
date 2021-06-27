import { HashRouter, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/work" exact component={Work} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </HashRouter>
  );
}

export default App;
