"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
	/* This is a React lifecycle method */
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},
	/* This is a React lifecycle method */
	componentWillMount: function() {
		// subscribe to changes on authors
		AuthorStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		// unsubscribe to changes on authors
		AuthorStore.removeChangeListener(this._onChange);
	},
	/* This is a React lifecycle method */
	/* This is a React lifecycle method */
	componentDidMount: function() {
	},
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	},
	
	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	}
});

module.exports = AuthorPage;