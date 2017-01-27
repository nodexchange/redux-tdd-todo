import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {List, Map} from 'immutable';
import TodoList from '../../src/components/TodoList';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = TestUtils;

describe('TodoList', () => {
  it('renders a list with only the active items if the filter is active', () => {
    const todos = List.of(
      Map({id: 1, text: 'React', status: 'active'}),
      Map({id: 2, text: 'Redux', status: 'active'}),
      Map({id: 3, text: 'Immutable', status: 'completed'})
    );
    const filter = 'active';
    const component = renderIntoDocument(
      <TodoList filter={filter} todos={todos} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('React');
    expect(items[1].textContent).to.contain('Redux');
  });
});
