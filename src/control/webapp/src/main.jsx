let Router = ReactRouter.Router;
let Route = ReactRouter.Route;

let Header = React.createClass({
    render() {
        return (
            <header>
                <div className="container">
                    <a className="logo" href="/">
                        <i className="fa fa-floppy-o"></i> Diskette
                    </a>
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={Header}>
        <Route path="*" component={Header}/>
    </Route>
  </Router>
), document.getElementById("root"))
