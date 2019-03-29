import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import App from '../components/App';
import People from '../components/People';
import Typos from '../components/People/Typos';
import Frequency from '../components/People/Frequency';
import TyposInput from '../components/People/TyposInput';

configure({ adapter: new Adapter() });

describe('<App />', () => {
	const wrapper = shallow(<App />);

	it('Should have just 1 Header', () => {
		expect(wrapper.find('Header').length).toBe(1);
	});

	it('Should have 1 div class container', () => {
		expect(wrapper.find('div.container').length).toBe(1);
	});

	it('Should have 4 routes', () => {
		expect(wrapper.find('Route').length).toBe(4);
	});

	it('Routes should be correct', () => {
		expect(wrapper.find('Route[path="/"]').props().component).toBe(People);
		expect(wrapper.find('Route[path="/typos"]').props().component).toBe(Typos);
		expect(wrapper.find('Route[path="/frequency"]').props().component).toBe(Frequency);
		expect(wrapper.find('Route[path="/typos_input"]').props().component).toBe(TyposInput);
	});

	it('Matches the snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});