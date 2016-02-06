var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Header = React.createClass({
    displayName: "Header",
    render: function render() {
        return React.createElement(
            "header",
            null,
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "a",
                    { className: "logo", href: "/" },
                    React.createElement("i", { className: "fa fa-floppy-o" }),
                    " Diskette"
                ),
                React.createElement(
                    "nav",
                    { className: "menu" },
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Overview"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Pages"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Users"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Products"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Orders"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Settings"
                            )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(
    Router,
    null,
    React.createElement(
        Route,
        { path: "/", component: Header },
        React.createElement(Route, { path: "*", component: Header })
    )
), document.getElementById("root"));