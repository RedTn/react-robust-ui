import React from 'react';
import Typography from './Typography';
import { shallow } from 'enzyme';

describe('Button', () => {
    describe('integration', () => {
        it('renders', () => {
            expect.assertions(1);

            const wrapper = shallow(<Typography />);
            expect(wrapper).toMatchSnapshot();
        });
        it('returns the proper variants', () => {
            const wrapper = shallow(<Typography variant="button" />);
            expect(wrapper.hasClass('button')).toBe(true);
            wrapper.setProps({ variant: 'button-small' });
            expect(wrapper.hasClass('button-small')).toBe(true);
            wrapper.setProps({ variant: 'heading2' });
            expect(wrapper.hasClass('heading2')).toBe(true);
            wrapper.setProps({ variant: 'body1' });
            expect(wrapper.hasClass('body1')).toBe(true);
            wrapper.setProps({ variant: 'caption' });
            expect(wrapper.hasClass('caption')).toBe(true);
            wrapper.setProps({ variant: 'adornment' });
            expect(wrapper.hasClass('adornment')).toBe(true);
            wrapper.setProps({ variant: 'input' });
            expect(wrapper.hasClass('input')).toBe(true);
            wrapper.setProps({ variant: 'tab' });
            expect(wrapper.hasClass('tab')).toBe(true);
            wrapper.setProps({ variant: 'tab-active' });
            expect(wrapper.hasClass('tab-active')).toBe(true);
        });
    });
    describe('unit', () => {});
});
