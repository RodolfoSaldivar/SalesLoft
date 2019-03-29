import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import bktree from'bktree';

import TyposInput from '../components/People/TyposInput';
import { validateTypos } from '../actions/peopleActions';
import withStore from './withStore';

configure({ adapter: new Adapter() });

describe('<TyposInput />', () => {
	const wrapper = shallow(withStore(<TyposInput />)).dive();

	it('Should have just 1 Table', () => {
		expect(wrapper.find('TyposInput').length).toBe(1);
	});

	it('Matches the snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

describe("validateTypos", () => {
	it("handles changing a purchase status and fetches all purchases", async () => {
		const dispatch = jest.fn();
		const getState = jest.fn();
		await validateTypos("rylauNS2GG", new bktree([]))(dispatch, getState);
		expect(dispatch).toBeCalledWith({type: "people_start"});
	});
});