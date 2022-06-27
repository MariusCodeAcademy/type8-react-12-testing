import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Todo';

const TodoWithRouter = (args) => (
  <BrowserRouter>
    <Todo {...args} />
  </BrowserRouter>
);

// integration test
it('should add new todo to todo list', () => {
  //
  render(<TodoWithRouter />);
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  fireEvent.change(inputEl, { target: { value: 'bubble gum' } });
  const btnEl = screen.getByRole('button', { name: /add/i });
  fireEvent.click(btnEl);
  const divEl = screen.getByText('bubble gum');
  expect(divEl).toBeInTheDocument();
});

// it should work with multiple todos

// it should render diffenere class when clicked on todo
