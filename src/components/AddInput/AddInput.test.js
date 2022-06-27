import { render, screen } from '@testing-library/react';
import AddInput from './AddInput';

it("it shout render input with placeholder 'Add a new task here...", () => {
  // Arrange
  render(<AddInput />);
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  expect(inputEl).toBeInTheDocument();
});
