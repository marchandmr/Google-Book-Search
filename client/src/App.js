import Header from "./Components/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import Navi from "./Components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navi />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Search />
          </Route>
          <Route exact path={["/saved"]}>
            <Saved />
          </Route>
        </Switch>
      </div >
    </Router >
  );
}

export default App;
