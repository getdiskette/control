let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
import Header from "./header/header.jsx";

ReactDOM.render((
  <Router>
    <Route path="/" component={Header}>
        <Route path="*" component={Header}/>
    </Route>
  </Router>
), document.getElementById("root"))
