import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './TodoFooter';

const TodoFooterWithRouter = (args) => (
  <BrowserRouter>
    <TodoFooter {...args} />
  </BrowserRouter>
);

it('it should render 1 task left', () => {
  // Arrange
  render(<TodoFooterWithRouter numberOfIncompleteTasks={1} />);
  const numOfTasksEl = screen.getByText('1 task left');
  expect(numOfTasksEl).toBeInTheDocument();
});

// it should render 10 tasks left

// it should not render 'tasks' if numberOfIncompleteTasks === 1
