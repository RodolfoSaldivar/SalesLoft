import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Table, Preloader, Icon } from 'react-materialize';

import Loading from '../Loading';
import CallError from '../CallError';
import * as peopleActions from '../../actions/peopleActions';

class Frequency extends Component {

	async componentDidMount() {
		if (!this.props.people.length)
			await this.props.getPeople();

		if (_.isEmpty(this.props.frequencies))
			this.props.setFrecuencies(this.props.people);
	}

	displayContent = () => (
		(this.props.error) ?
			<CallError error={ this.props.error } /> :
			this.displayTable()
	);

	displayTable = () => (
		<div>
			<h3>
				Frequency
			</h3>
			<Table hoverable={ true }>
				<thead>
					<tr>
						<th>Character</th>
						<th>Count</th>
					</tr>
				</thead>

				<tbody>
					{ this.displayRows() }
				</tbody>
			</Table>
		</div>
	);

	displayRows = () => (
		Object.keys(this.props.frequencies).map((char) => (
			<tr key={ char }>
				<td>{ char }</td>
				<td>{ this.props.frequencies[char] }</td>
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

export default connect(mapStateToProps, peopleActions)(Frequency);
