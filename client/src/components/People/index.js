import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Table, Preloader, Icon } from 'react-materialize';

import Loading from '../Loading';
import CallError from '../CallError';
import * as peopleActions from '../../actions/peopleActions';

class People extends Component {

	componentDidMount() {
		if (!this.props.people.length)
			this.props.getPeople();
	}

	displayContent = () => (
		(this.props.error) ?
			<CallError error={ this.props.error } /> :
			this.displayTable()
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
				{ (this.props.loading) ? <Loading /> : this.displayContent() }
				<br/><br/><br/>
			</div>
		);
	}
}

const mapStateToProps = ({ peopleReducer }) => peopleReducer;

export default connect(mapStateToProps, peopleActions)(People);