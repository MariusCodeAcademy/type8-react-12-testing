import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders Header', () => {
  render(<Header />);
});

it('renders title from props', () => {
  render(<Header title='testing123' />);
  // const headerEl = screen.getByText(/testing123/i);
  const headerEl = screen.getByText('testing123');
  expect(headerEl).toBeInTheDocument();
});
