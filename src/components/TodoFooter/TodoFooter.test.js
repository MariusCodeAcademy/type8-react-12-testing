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

it('it should render 10 tasks left', () => {
  // Arrange
  render(<TodoFooterWithRouter numberOfIncompleteTasks={10} />);
  const numOfTasksEl = screen.getByText(/10 tasks left/i);
  expect(numOfTasksEl).toBeInTheDocument();
});

it('it should not render tasks if only o task', () => {
  // Arrange
  render(<TodoFooterWithRouter numberOfIncompleteTasks={1} />);
  const numOfTasksEl = screen.queryByText(/tasks/i);
  expect(numOfTasksEl).not.toBeInTheDocument();
});

it('1 task should be visible', () => {
  // Arrange
  render(<TodoFooterWithRouter numberOfIncompleteTasks={1} />);
  const numOfTasksEl = screen.getByText('1 task left');
  expect(numOfTasksEl).toBeVisible();
});
