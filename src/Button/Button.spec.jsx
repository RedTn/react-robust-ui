import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
    describe('integration', () => {
        it('renders', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button />);
            expect(wrapper).toMatchSnapshot();
        });
        it('does not apply bordered style when false', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button color="blue" bordered={false} />);
            const styles = wrapper.prop('style');
            expect(styles).toEqual(
                expect.not.objectContaining({
                    border: expect.anything()
                })
            );
        });
        it('does not bordered style when true', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button color="blue" bordered />);
            const styles = wrapper.prop('style');
            expect(styles).toEqual(
                expect.objectContaining({
                    border: expect.stringContaining('1px solid')
                })
            );
        });
        it('does not apply gradient style when false', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button color="blue" gradient={false} />);
            const styles = wrapper.prop('style');
            expect(styles).toEqual(
                expect.objectContaining({
                    background: expect.not.stringContaining('linear-gradient')
                })
            );
        });
        it('does apply gradient style when true', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button color="blue" gradient />);
            const styles = wrapper.prop('style');
            expect(styles).toEqual(
                expect.objectContaining({
                    background: expect.stringContaining('linear-gradient')
                })
            );
        });
        it('applies color style from prop', () => {
            expect.assertions(3);

            const wrapper = shallow(<Button gradient={false} />);
            expect(wrapper.prop('style')).toEqual(
                expect.objectContaining({
                    background: 'silver'
                })
            );
            wrapper.setProps({ color: 'blue' });
            expect(wrapper.prop('style')).toEqual(
                expect.objectContaining({
                    background: 'blue'
                })
            );
            wrapper.setProps({ color: 'red' });
            expect(wrapper.prop('style')).toEqual(
                expect.objectContaining({
                    background: 'red'
                })
            );
        });
        it('applies bright text color from a dark background', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button color="blue" gradient={false} />);
            expect(wrapper.prop('style')).toEqual(
                expect.objectContaining({
                    color: 'white'
                })
            );
        });
        it('applies dark text color from a bright background', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button color="base" gradient={false} />);
            expect(wrapper.prop('style')).toEqual(
                expect.objectContaining({
                    color: 'black'
                })
            );
        });
        it('applies default params to dynamic styling', () => {
            expect.assertions(1);

            const wrapper = shallow(<Button />);
            expect(wrapper.instance().applyDynamicStyles({})).toEqual(
                expect.objectContaining({
                    background: expect.anything(),
                    color: expect.anything()
                })
            );
        });
    });
    describe('unit', () => {});
});
