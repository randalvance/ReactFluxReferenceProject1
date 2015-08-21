"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
	/*
		propTypes define what props this component needs to do its work.
		if a required prop is not specified outside, then a warning will be seen
		in the console of the browser. This warning will only show on the
		developer version of react, not minified.
	*/
	propTypes: {
		authors: React.PropTypes.array.isRequired	
	},
	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
					<td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};
		
		return (
			<table className="table">
				<thead>
					<td></td>
					<th>ID</th>
					<th>Name</th>
				</thead>
				<tbody>
					{this.props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		);
	},
	
	deleteAuthor: function(id, event) {
		event.preventDefault();
		
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted!');
	}
});

module.exports = AuthorList;