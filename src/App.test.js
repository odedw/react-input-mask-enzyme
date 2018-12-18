import React from 'react';
import {mount} from 'enzyme'
import ReactDOM from 'react-dom';
import App from './App';

let component

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('typing in field works', () => {
  component = mount(<App />)

  component
    .find('input')
    .simulate('change', {target: {value: '1234567890'}})

  expect('(123) 456 7890').toEqual(component.find('input').prop('value')); 
})