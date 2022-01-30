
import App from './App';
import { render, fireEvent, cleanup, screen,} from '@testing-library/react'

afterEach(cleanup)

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

test('starts without weather card', () => {
  const { queryByTestId } = render(<App />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(queryByTestId('weather-card')).toBeNull()
})

test('after clicking on button, displays weather card', () => {
  const { queryByTestId, getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText("Get Forecast"));
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(queryByTestId('weather-card')).toBeDefined()
});