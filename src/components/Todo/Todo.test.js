import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Todo';

const TodoWithRouter = (args) => (
  <BrowserRouter>
    <Todo {...args} />
  </BrowserRouter>
);

const addTasks = (tasksArray) => {
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  const btnEl = screen.getByRole('button', { name: /add/i });
  tasksArray.forEach((task) => {
    fireEvent.change(inputEl, { target: { value: task } });
    fireEvent.click(btnEl);
  });
};

// integration test
it('should add new todo to todo list', () => {
  //
  render(<TodoWithRouter />);
  addTasks(['bubble gum']);
  const divEl = screen.getByText('bubble gum');
  expect(divEl).toBeInTheDocument();
});

// it should work with multiple todos
it('should work with multiple todos', () => {
  //
  render(<TodoWithRouter />);
  addTasks(['Buy milk', 'go running', 'Do homework']);

  const divEls = screen.getAllByTestId('single-todo');
  expect(divEls).toHaveLength(3);
});

// it should render diffenere class when clicked on todo
