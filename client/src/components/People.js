import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Preloader, Icon } from 'react-materialize';
import * as peopleActions from '../actions/peopleActions';

class People extends Component {

	componentDidMount() {
		if (!this.props.loaded)
			this.props.getPeople();
	}

	displayPreloader = () => (
		<div className="center">
			<br/><br/><br/>
			<Preloader/>
		</div>
	);

	displayContent = () => (
		(this.props.error) ?
			this.displayError() :
			this.displayTable()
	);

	displayError = () => (
		<div className="center">
			<Icon className="red-text" large>error</Icon>
			<h2>There was an error</h2>
			<h3>Please try in a few minutes</h3>
			<h4 className="red-text">ERROR:</h4>
			{ this.props.error }
		</div>
	);

	displayTable = () => (
		<div>
			<h3>
				People
			</h3>
			<Table hoverable={ true }>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Title</th>
					</tr>
				</thead>

				<tbody>
					{ this.displayRows() }
				</tbody>
			</Table>
		</div>
	);

	displayRows = () => (
		this.props.people.map((person, index) => (
			<tr key={ index }>
				<td>{ person.name }</td>
				<td>{ person.email }</td>
				<td>{ person.title }</td>
			</tr>
		))
	);

	render() {
		return (
			<div>
				{ (this.props.loading) ? this.displayPreloader() : this.displayContent() }
			</div>
		);
	}
}

const mapStateToProps = ({ peopleReducer }) => peopleReducer;

export default connect(mapStateToProps, peopleActions)(People);
