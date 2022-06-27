import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders Header', () => {
  render(<Header />);
});

it('renders title from props', () => {
  // Arrange
  render(<Header title='testing123' />);
  // const headerEl = screen.getByText(/testing123/i);
  // Act
  const headerEl = screen.getByText('testing123');
  // Assert
  expect(headerEl).toBeInTheDocument();
});

// it('should rendder a heading', () => {
//   // Arrange
//   render(<Header title='todos' />);

//   // seacrh
//   const headingEl = screen.getByRole('heading');
//   // Assert
//   expect(headingEl).toBeInTheDocument();
// });

it('should render 2 headings', () => {
  // Arrange
  render(<Header title='todos' />);

  // seacrh
  const headingElArr = screen.getAllByRole('heading');
  // Assert
  expect(headingElArr).toHaveLength(2);
});
