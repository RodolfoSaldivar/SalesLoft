import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Table, Input, Button } from 'react-materialize';

import Loading from '../Loading';
import NoContent from '../NoContent';
import CallError from '../CallError';
import * as peopleActions from '../../actions/peopleActions';

class TyposInput extends Component {

	async componentDidMount() {
		if (!this.props.people.length)
			await this.props.getPeople();

		if (!this.props.tree)
			await this.props.createTree(this.props.people);
	}

	handleChange = (event) => (
		this.props.validateTypos(
			event.target.value,
			this.props.tree
		)
	);

	displayContent = () => (
		(this.props.error) ?
			<CallError error={ this.props.error } /> :
			this.displayTable()
	);

	displayTable = () => (
		<div>
			<h3>
				Possible Typos
			</h3>
			<div className="row valign-wrapper">
				<Input
					m={6}
					label="Of:"
					value={ this.props.input }
					onChange={ this.handleChange }
				/>
				<div className="col m6">
					Try with: <b><i>jr1re2y@g3lover.co</i></b> | <b><i>ana@hirte.bliz</i></b>
				</div>
			</div>
			<Table hoverable={ true }>
				<thead>
					<tr>
						<th>Source</th>
						<th>Possible Duplicates</th>
					</tr>
				</thead>

				<tbody>
					{ this.displayRows() }
				</tbody>
			</Table>
		</div>
	);

	displayRows = () => (
		<tr>
			<td>{ this.props.input }</td>
			<td>
				{ this.props.input_typos.map((email, index) => (
					<p key={index}>{ email }</p>
				))}
			</td>
		</tr>
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

export default connect(mapStateToProps, peopleActions)(TyposInput);
