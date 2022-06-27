import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from './AddInput';

it("it shout render input with placeholder 'Add a new task here...'", () => {
  // Arrange
  render(<AddInput todos={[]} />);
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  expect(inputEl).toBeInTheDocument();
});

it('should be able to type in input', () => {
  // Arrange
  render(<AddInput todos={[]} />);
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  // Act
  // fireEvent.veiksmas(elementas, eventObjektas)
  fireEvent.change(inputEl, { target: { value: 'bubble gum' } });
  // assert
  expect(inputEl).toHaveValue('bubble gum');
  expect(inputEl.value).toBe('bubble gum');
});

// tuscia jest funkcija
const mockFn = jest.fn();

it('should clear input on add btb click', () => {
  // Arrange
  render(<AddInput setTodos={mockFn} todos={[]} />);
  // paimti input
  const inputEl = screen.getByPlaceholderText('Add a new task here...');

  // irasyti teksta
  fireEvent.change(inputEl, { target: { value: 'bubble gum' } });

  // pasiimti mygtuka
  const btnEl = screen.getByRole('button', { name: /add/i });
  // paspausti mygtuka
  fireEvent.click(btnEl);
  // expectinti kad input yra tucias
  expect(inputEl.value).toBe('');
});
