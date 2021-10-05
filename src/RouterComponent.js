import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import Startups from "./Pages/Startups";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function RouterComponent() {
  return (
    <div>
      <Router>
        <Route exact={true} path="/" component={Home} />
        <Route path="/startups" component={Startups} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default RouterComponent;
