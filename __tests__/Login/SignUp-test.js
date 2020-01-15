import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage1 from "../../src/Component/Login/SignUpPage1";
import SignUpPage2 from "../../src/Component/Login/SignUpPage2";
import SignUpPage3 from "../../src/Component/Login/SignUpPage3";

import renderer from 'react-test-renderer';

/**************************** SignUpPage1 Component Testing ******************************/

// This test just uses Jest snapshot testing
it('SignUpPage1 Page renders correctly, test using Jest', () => {
    renderer.create(<SignUpPage1 />);
});

// Using Jest + Enzyme
describe('<SignUpPage1/>', () => {
    it('SignUp Page renders correctly, test using Jest + Enzyme', () => {
        expect(shallow(<SignUpPage1 />)).toMatchSnapshot();
    });

    const wrapper = shallow(<SignUpPage1 />)

    it('checking initial state', () => {
        expect(wrapper.state('firstName')).toEqual('');
        expect(wrapper.state('lastName')).toEqual('');
    })
});
