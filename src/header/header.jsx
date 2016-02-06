export default React.createClass({
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
