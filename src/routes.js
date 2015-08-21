"use strict";

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	/* If path is not defined for a route, it will automatically use the name */
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		
		<Route name="authors" handler={require('./components/authors/authorPage')} />
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
		<Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
		
		<NotFoundRoute handler={require('./components/notFoundPage')} />
		
		// Define Redirects
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;