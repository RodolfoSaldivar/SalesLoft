import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Table } from 'react-materialize';

import Loading from '../Loading';
import NoContent from '../NoContent';
import CallError from '../CallError';
import * as peopleActions from '../../actions/peopleActions';

class Typos extends Component {

	async componentDidMount() {
		if (!this.props.people.length)
			await this.props.getPeople();

		if (!this.props.tree)
			await this.props.createTree(this.props.people);

		if (!this.props.typos.length) {
			this.props.viewTypos(
				this.props.tree,
				this.props.people
			);
		}
	}

	displayContent = () => {
		if (this.props.error)
			return <CallError error={ this.props.error } />;

		if (this.props.typos.length)
			return this.displayTable();
		
		return <NoContent />;
	};

	displayTable = () => (
		<div>
			<h3>
				Possible Typos
			</h3>
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
		this.props.typos.map((typos, index) => (
			<tr key={ index }>
				<td>{ typos[0] }</td>
				<td>
					{ typos.map((email, key) => {
						if (key === 0) return;
						return (<p key={key}>{ email }</p>)
					}) }
				</td>
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

export default connect(mapStateToProps, peopleActions)(Typos);
