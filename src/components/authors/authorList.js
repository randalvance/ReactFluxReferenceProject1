"use strict";

var React = require('react');
var Link = require('react-router').Link;

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
					<td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};
		
		return (
			<table className="table">
				<thead>
					<th>ID</th>
					<th>Name</th>
				</thead>
				<tbody>
					{this.props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = AuthorList;