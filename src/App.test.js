import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText("Whatever the Weather");
  expect(linkElement).toBeInTheDocument();
});


test('renders input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter City");
  expect(input).toBeInTheDocument();
});
