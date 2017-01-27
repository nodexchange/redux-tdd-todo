import React, {PureComponent, PropTypes} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends PureComponent {

  static propTypes = {
    todos: PropTypes.object.isRequired,
    filter: PropTypes.string,
  }

  static defaultProps = {
    filter: 'active',
  }

  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => item.get('status') === this.props.filter,
      );
    }
    return [];
  }
  render() {
    // Only the filtered items are displayed
    const items = this.getItems();
    return (
      <section className="main">
        <ul className="todo-list">
          {items.map(item =>
            <TodoItem
              key={item.get('text')}
              text={item.get('text')}
            />,
          )}
        </ul>
      </section>
    );
  }
}
