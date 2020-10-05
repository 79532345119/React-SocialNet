import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './profileStatus';


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Good job' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Good job');
    });
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='Good job' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull()
    });
    test('after creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus status='Good job' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='Good job' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('Good job')
    });
    test('input should be displayed in editMode insted of span', () => {
        const component = create(<ProfileStatus status='Good job' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('Good job')
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='Good job' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    });      
});