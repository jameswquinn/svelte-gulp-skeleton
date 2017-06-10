const App = require("./app.html");

var app = new App({
    target: document.querySelector( 'main' ),
    data: {
    name: 'world'
    }
});