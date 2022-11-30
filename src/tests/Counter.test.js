import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const msg = screen.getByText(/Counter/i);
  expect(msg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count')
  expect(parseInt(count.innerHTML)).toBe(0)
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText('+'))
  const count = screen.getByTestId('count')
  expect(parseInt(count.innerHTML)).toBe(1)
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText('-'))
  const count = screen.getByTestId('count')
  expect(parseInt(count.innerHTML)).toBe(-1)
});
