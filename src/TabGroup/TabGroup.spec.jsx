import React from 'react';
import TabGroup from './TabGroup';
import Typography from '../Typography/Typography.jsx';
import { shallow } from 'enzyme';

describe('TabGroup', () => {
    describe('integration', () => {
        it('matchs base snapshot', () => {
            expect.assertions(1);

            const wrapper = shallow(<TabGroup />);
            expect(wrapper).toMatchSnapshot();
        });
        it('matches basic usage snapshot', () => {
            expect.assertions(1);

            const wrapper = shallow(
                <TabGroup>
                    <TabGroup.Tab value={0}>Test</TabGroup.Tab>
                    <TabGroup.Tab defaultActive value={1}>
            Test2
                    </TabGroup.Tab>
                    <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
                </TabGroup>
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('renders basic element if not a tab', () => {
            expect.assertions(1);

            const wrapper = shallow(
                <TabGroup>
                    <TabGroup.Tab value={0}>Test</TabGroup.Tab>
                    <TabGroup.Tab defaultActive value={1}>
            Test2
                    </TabGroup.Tab>
                    <span>This is not a tab</span>
                </TabGroup>
            );
            expect(wrapper).toMatchSnapshot();
        });
        it('makes clicked tab the active one', () => {
            expect.assertions(4);

            const callback = jest.fn();
            const wrapper = shallow(
                <TabGroup onChange={callback}>
                    <TabGroup.Tab value={0}>Test</TabGroup.Tab>
                    <TabGroup.Tab value={1}>Test2</TabGroup.Tab>
                    <span>This is not a tab</span>
                </TabGroup>
            );
            let firstTab = wrapper.children().filterWhere(n => n.prop('value') === 0);
            expect(firstTab).toMatchSnapshot();
            expect(callback).not.toHaveBeenCalled();
            firstTab.prop('selectTab')();
            wrapper.update();
            firstTab = wrapper.children().filterWhere(n => n.prop('value') === 0);
            expect(callback).toHaveBeenCalled();
            expect(firstTab).toMatchSnapshot();
        });
    });
    describe('unit', () => {});
    describe('Tab', () => {
        describe('integration', () => {
            it('is not active be default', () => {
                expect.assertions(2);

                const wrapper = shallow(<TabGroup.Tab />);
                expect(wrapper.find(Typography).prop('variant')).toBe('tab');
                expect(wrapper).toMatchSnapshot();
            });
            it('has active class typography when active', () => {
                expect.assertions(2);

                const wrapper = shallow(<TabGroup.Tab isActive />);
                expect(wrapper.find(Typography).prop('variant')).toBe('tab-active');
                expect(wrapper).toMatchSnapshot();
            });
            it('bubbles selectTab when clicked', () => {
                expect.assertions(2);

                const callback = jest.fn();
                const wrapper = shallow(<TabGroup.Tab selectTab={callback} />);
                expect(callback).not.toHaveBeenCalled();
                wrapper.find('span').prop('onClick')();
                expect(callback).toHaveBeenCalled();
            });
        });
        describe('unit', () => {});
    });
});
