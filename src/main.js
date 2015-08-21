"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

// to use HTML5 history location feature (IE 10+), 
//  add Router.HistoryLocation for second parameter
Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('app'));
});