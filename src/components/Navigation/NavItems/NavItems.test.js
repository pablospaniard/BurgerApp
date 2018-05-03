import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItem from './NavItem/NavItem';
import NavItems from './NavItems';

configure({ adapter: new Adapter() });

describe('<NavItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavItems />);
    });

    it('should render two navitem elements if not sign in', () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it('should render three navitem elements if signed in', () => {
        //wrapper = shallow(<NavItems isAuthenticated />);
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });

    it('should render Logout element if signed in', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<NavItem link='/logout'>Logout</NavItem>)).toEqual(true);
    });
});