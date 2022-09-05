import React from 'react';
import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';

describe('Profile status component', () => {
    test('after creation span with should be displayed', () => {
        const component = create(<ProfileStatus status='done' updateStatus={() => {}}/>)
        
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');

        expect(span.children.length).not.toBeNull();
    })

    test('after creation input should"nt be displayed', () => {
        const component = create(<ProfileStatus status='done'  updateStatus={() => {}}/>)
        
        const root = component.root;
    
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType('input')
        }).toThrow();
    })

    test('after creation span with should contains correct status', () => {
        const component = create(<ProfileStatus status='done'  updateStatus={() => {}}/>)
        
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');

        expect(span.children[0]).toBe('done');
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='done' updateStatus={() => {}}/>)
        
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        span.props.onDoubleClick();

        // eslint-disable-next-line testing-library/await-async-query
        const input = root.findByType('input');
    
        expect(input.props.value).toBe('done');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='done' updateStatus={mockCallback}/>)
        
        const instance = component.getInstance();
        //@ts-ignore
        instance?.deactivateMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})