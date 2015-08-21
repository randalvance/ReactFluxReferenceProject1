"use strict";

var React = require('react');

var About = React.createClass({
	// static methods
	statics: {
		// logic whether this page can be transitioned TO
		// for example, only logged in users can go to this page, then put authentication check here
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
				// prevent transition to this page
				transition.abort();
			} else {
				// allow transition to occur
				callback();
			}
		},
		// logic whether we can exit this page or not
		// for example, checking if there are unsaved changes in this page
		willTransitionFrom: function(transition, component) {
			if (!confirm('Are you sure you want to leave a page that\'s this exciting?')) {
				// prevent transition to this page
				transition.abort();
			}
		}
	},
	render: function() {
		return (
			<div> 
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;