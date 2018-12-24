import React from 'react';
import Button from './Button';

describe('Button integration', () => {
    it('renders', () => {
        const wrapper = <Button />;
        expect(wrapper).toMatchSnapshot();
    });
});
