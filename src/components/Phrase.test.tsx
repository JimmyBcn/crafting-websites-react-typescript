import * as React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import Phrase from './Phrase'

const text = 'some joke'

describe('Phrase', () => {
    let wrapper: ShallowWrapper<Phrase>;

    beforeEach(() => {
        wrapper = shallow(<Phrase text={text}/>)
    });

    it('displays joke', () => {
        expect(wrapper.contains(text)).toBe(true);
    });

    it('has correct structure', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});