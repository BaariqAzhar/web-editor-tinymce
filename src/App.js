import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import WebEditor from "./webEditor/index";
import Result from "./webEditor/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <WebEditor />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
