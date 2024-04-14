import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title) {
    // makeObservable(this, {
    //   title: observable,
    //   finished: observable,
    //   toggle: action,
    // });
    makeAutoObservable(this);
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos = [];
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  constructor(todos) {
    // makeObservable(this, {
    //   todos: observable,
    //   unfinishedTodoCount: computed,
    // });
    makeAutoObservable(this);
    this.todos = todos;
  }
}

const TodoListView = observer(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
));

const TodoView = observer(({ todo }) => (
  <li>
    <input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
    {todo.title}
  </li>
));

const store = new TodoList([new Todo('Get Coffee'), new Todo('Write simpler code')]);

export const List = () => {
  return <TodoListView todoList={store} />;
};
